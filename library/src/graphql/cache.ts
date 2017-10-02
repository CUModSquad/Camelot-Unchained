/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import * as LRU from 'lru-cache';
import * as hash from 'object-hash';

export interface CacheOptions {
  maxAge: number;
}

export interface CacheAdapter {
  getItem(key: string, options: Partial<CacheOptions>): Promise<null|string>;
  setItem(key: string, data: string, options: Partial<CacheOptions>): Promise<boolean>;
  removeItem(key: string, options: Partial<CacheOptions>): Promise<boolean>;
}

const IN_MEMORY_SIZE: number = 1024 * 1024 * 0.5; // 0.5MB
const LOCAL_STORAGE_SIZE: number = 1024 * 1024 * 5; // 5MB
const DEFAULT_MAX_AGE: number = 1000 * 30; // 30 seconds in ms
const DEBUG: boolean = false; // turn logging on/off

class InMemoryCacheAdapter implements CacheAdapter {

  public lru: LRU.Cache<string, string>;
  public maxAge: number;

  public constructor(maxAge: number = DEFAULT_MAX_AGE) {
    this.maxAge = maxAge;
    this.lru = new LRU({
      max: IN_MEMORY_SIZE, // 0.5MB
      maxAge, // ms
      length: (value: string) => {
        return value.length;
      },
    });
  }

  public getItem = async (key: string, options: Partial<CacheOptions> = {}): Promise<null|string> => {
    DEBUG && console.log('InMemoryCacheAdapter getItem', key);
    if (this.lru.has(key)) {
      return this.lru.get(key);
    } else {
      return null;
    }
  }

  public setItem = async (key: string, data: string, options: Partial<CacheOptions> = {}): Promise<boolean> => {
    const maxAge = options.maxAge ? options.maxAge : this.maxAge;
    DEBUG && console.log('InMemoryCacheAdapter setItem', key, maxAge);
    return this.lru.set(key, data, maxAge);
  }

  public removeItem = async (key: string, options: Partial<CacheOptions> = {}): Promise<boolean> => {
    this.lru.del(key);
    DEBUG && console.log('InMemoryCacheAdapter removeItem', key);
    return true;
  }

}

class LocalStorageCacheAdapter implements CacheAdapter {
  
    public lru: LRU.Cache<string, number>;
    public maxAge: number;
  
    public constructor(maxAge: number = DEFAULT_MAX_AGE) {
      this.maxAge = maxAge;
      this.lru = new LRU({
        max: LOCAL_STORAGE_SIZE, // 5MB
        maxAge, // ms
        length: (value: number) => {
          return value;
        },
        dispose: (key: string, value: number) => {
          try {
            localStorage.removeItem(this.getKeyName(key));
          } catch (e) {
            console.error(e);
          }
        },
      });
      this.populateKeys();
    }
  
    public getItem = async (key: string, options: Partial<CacheOptions> = {}): Promise<null|string> => {
      DEBUG && console.log('LocalStorageCacheAdapter getItem', key);
      if (this.lru.has(key) && this.lru.get(key)) {
        try {
          return localStorage.getItem(this.getKeyName(key));
        } catch (e) {
          console.error(e);
          await this.removeItem(key);
          return null;
        }
      } else {
        return null;
      }
    }
  
    public setItem = async (key: string, data: string, options: Partial<CacheOptions> = {}): Promise<boolean> => {
      const maxAge = options.maxAge ? options.maxAge : this.maxAge;
      DEBUG && console.log('LocalStorageCacheAdapter setItem', key, maxAge);
      let response = this.lru.set(key, data.length, maxAge);
      if (response) {
        try {
          localStorage.setItem(this.getKeyName(key), data);
          this.storeKey(key, data.length, maxAge);
        } catch (e) {
          console.error(e);
          await this.removeItem(key);
          response = false;
        }
      }
      return response;
    }
  
    public removeItem = async (key: string, options: Partial<CacheOptions> = {}): Promise<boolean> => {
      this.lru.del(key);
      DEBUG && console.log('LocalStorageCacheAdapter removeItem', key);
      return true;
    }

    public getKeyName = (key: string) => {
      return `GRAPHQL_CACHE_${key}`;
    }

    public populateKeys = () => {
      const keys = this.getKeys();
      const now = (new Date()).getTime();
      DEBUG && console.log('LocalStorageCacheAdapter populateKeys', keys, now);
      const newKeys = [];
      keys.forEach((key) => {
        if (key.expires > now) {
          DEBUG && console.log('LocalStorageCacheAdapter populateKey', key);
          this.lru.set(key.key, key.size, key.expires - now);
          newKeys.push(key);
        }
      });
      localStorage.setItem('GRAPHQL_CACHE_KEYS', JSON.stringify(newKeys));
    }
    
    public storeKey = (key: string, size: number, maxAge: number) => {
      let keys = this.getKeys();
      keys = keys.filter(k => k.key !== key);
      keys.push({
        key,
        size,
        expires: (new Date()).getTime() + maxAge,
      });
      localStorage.setItem('GRAPHQL_CACHE_KEYS', JSON.stringify(keys));
    }

    public getKeys = (): {key: string, size: number, expires: number}[] => {
      let keys: {key: string, size: number, expires: number}[] = [];
      const rawKeys = localStorage.getItem('GRAPHQL_CACHE_KEYS');
      if (rawKeys) {
        keys = JSON.parse(rawKeys);
        if (!Array.isArray(keys)) {
          keys = [];
        }
      }
      return keys;
    }
}

export interface CacheResult {
  key: string;
  isHit: boolean;
  data?: any;
}

export class Cache {

  private adapters: CacheAdapter[];
  
  public getItem = async (rawKey: string, options: Partial<CacheOptions> = {}): Promise<CacheResult> => {
    const key = hash.sha1(rawKey);

    const adapters = this.getAdapters();

    const result: CacheResult = {
      key,
      isHit: false,
    };

    for (let i = 0; i < adapters.length; i++) {
      const adapterResult = await adapters[i].getItem(key, options);
      if (adapterResult != null) {
        result.isHit = true;
        result.data = JSON.parse(adapterResult);
        break;
      }
    }

    DEBUG && console.log('Cache getItem', key, result);

    return result;
  }
  
  public setItem = async (rawKey: string, rawData: any, options: Partial<CacheOptions> = {}): Promise<boolean[]> => {
    const key = hash.sha1(rawKey);
    const data = JSON.stringify(rawData);

    const promises = this.getAdapters().map(adapter => adapter.setItem(key, data, options));

    let response = [];

    try {
      response = await Promise.all(promises);
    } catch (e) {
      console.error(e);
    }
    
    DEBUG && console.log('Cache setItem', key, data.length, response);
    return response;
  }
  
  public removeItem = async (rawKey: string, options: Partial<CacheOptions> = {}): Promise<boolean[]> => {
    const key = hash.sha1(rawKey);

    const promises = this.getAdapters().map(adapter => adapter.removeItem(key, options));

    let response = [];

    try {
      response = await Promise.all(promises);
    } catch (e) {
      console.error(e);
    }
    
    DEBUG && console.log('Cache removeItem', key, response);
    return response;
  }

  protected getAdapters(): CacheAdapter[] {
    if (!this.adapters) {
      this.adapters = [
        new InMemoryCacheAdapter(),
        new LocalStorageCacheAdapter(),
      ];
    }
    return this.adapters;
  }
}

const cacheInstance = new Cache();

export default cacheInstance;

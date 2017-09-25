/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */


export interface ObjectMap<T> {
  [key: string]: T;
}

// Utilities
export type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;


export function withDefaults<T extends ObjectMap<any>>(a: Partial<T> | null | undefined, defaults: T): T {
  if (!a) return defaults;
  const result: T = {} as any;
  for (const key in defaults) {
    (result as any)[key] = a[key] || defaults[key];
  }
  return result;
}

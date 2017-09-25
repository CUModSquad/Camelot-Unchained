/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

export function checkStatus(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    (<any> error).response = response;
    throw error;
  }
}

export function parseJSON(response: any) {
  return response.json();
}

export function makeQueryString(url: string, params: any = {}): string {
  if (!params) return url;

  // tslint:disable-next-line
  let key: string;
  const qs: string[] = [];
  for (key in params) {
    if (params.hasOwnProperty(key)) {
      qs.push(key + '=' + encodeURIComponent(params[key]));
    }
  }
  let modifiedUrl = url;
  if (qs.length) {
    modifiedUrl += '?' + qs.join('&');
  }
  return modifiedUrl;
}

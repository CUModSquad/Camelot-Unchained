/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
declare function ok(text: string): boolean;
declare function isImage(text: string): RegExpMatchArray;
declare function isVideo(text: string): string;
declare function isVine(text: string): string;
declare const _default: {
    ok: typeof ok;
    isImage: typeof isImage;
    isVideo: typeof isVideo;
    isVine: typeof isVine;
};
export default _default;

/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
declare enum plotPermissions {
    Self = 0,
    Group = 1,
    Friends = 2,
    Guild = 4,
    Realm = 8,
    All = 16,
    COUNT = 32
}
export default plotPermissions;

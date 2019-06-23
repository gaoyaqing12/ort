/*
 * Copyright (C) 2019 HERE Europe B.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 * License-Filename: LICENSE
 */

class VcsInfo {
    constructor(obj) {
        this.type = '';
        this.url = '';
        this.revision = '';
        this.resolvedRevision = '';
        this.path = '';

        if (obj instanceof Object) {
            if (obj.type) {
                this.type = obj.type;
            }

            if (obj.url) {
                this.url = obj.url;
            }

            if (obj.revision) {
                this.revision = obj.revision;
            }

            if (obj.resolved_revision) {
                this.resolvedRevision = obj.resolved_revision;
            }

            if (obj.resolvedRevision) {
                this.resolvedRevision = obj.resolvedRevision;
            }

            if (obj.path) {
                this.path = obj.path;
            }
        }
    }
}

export default VcsInfo;

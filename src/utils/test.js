/*
Copyright 2019-2020 The Tekton Authors
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* istanbul ignore file */
import fetchMock from 'fetch-mock';

import { getAPIRoot } from '../api/comms';

const apiRoot = getAPIRoot();

export function mockCSRFToken() {
  fetchMock.get(`${apiRoot}/v1/token`, () => ({
    headers: {
      'X-CSRF-Token': 'fake_token'
    }
  }));
}

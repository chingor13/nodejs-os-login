// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
import {describe, it} from 'mocha';
const osloginserviceModule = require('../src');

const FAKE_STATUS_CODE = 1;
class FakeError {
  name: string;
  message: string;
  code: number;
  constructor(n: number) {
    this.name = 'fakeName';
    this.message = 'fake message';
    this.code = n;
  }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError | null, response?: {} | null): void;
}

export class Operation {
  constructor() {}
  promise() {}
}
function mockSimpleGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error: FakeError | null
) {
  return (actualRequest: {}, options: {}, callback: Callback) => {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}
describe('v1.OsLoginServiceClient', () => {
  it('has servicePath', () => {
    const servicePath =
      osloginserviceModule.v1.OsLoginServiceClient.servicePath;
    assert(servicePath);
  });
  it('has apiEndpoint', () => {
    const apiEndpoint =
      osloginserviceModule.v1.OsLoginServiceClient.apiEndpoint;
    assert(apiEndpoint);
  });
  it('has port', () => {
    const port = osloginserviceModule.v1.OsLoginServiceClient.port;
    assert(port);
    assert(typeof port === 'number');
  });
  it('should create a client with no option', () => {
    const client = new osloginserviceModule.v1.OsLoginServiceClient();
    assert(client);
  });
  it('should create a client with gRPC fallback', () => {
    const client = new osloginserviceModule.v1.OsLoginServiceClient({
      fallback: true,
    });
    assert(client);
  });
  it('has initialize method and supports deferred initialization', async () => {
    const client = new osloginserviceModule.v1.OsLoginServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.osLoginServiceStub, undefined);
    await client.initialize();
    assert(client.osLoginServiceStub);
  });
  it('has close method', () => {
    const client = new osloginserviceModule.v1.OsLoginServiceClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });
  describe('deletePosixAccount', () => {
    it('invokes deletePosixAccount without error', done => {
      const client = new osloginserviceModule.v1.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.oslogin.v1.IDeletePosixAccountRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deletePosixAccount = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.deletePosixAccount(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deletePosixAccount with error', done => {
      const client = new osloginserviceModule.v1.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.oslogin.v1.IDeletePosixAccountRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deletePosixAccount = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.deletePosixAccount(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('deleteSshPublicKey', () => {
    it('invokes deleteSshPublicKey without error', done => {
      const client = new osloginserviceModule.v1.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.oslogin.v1.IDeleteSshPublicKeyRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteSshPublicKey = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.deleteSshPublicKey(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteSshPublicKey with error', done => {
      const client = new osloginserviceModule.v1.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.oslogin.v1.IDeleteSshPublicKeyRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteSshPublicKey = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.deleteSshPublicKey(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('getLoginProfile', () => {
    it('invokes getLoginProfile without error', done => {
      const client = new osloginserviceModule.v1.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.oslogin.v1.IGetLoginProfileRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getLoginProfile = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getLoginProfile(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getLoginProfile with error', done => {
      const client = new osloginserviceModule.v1.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.oslogin.v1.IGetLoginProfileRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getLoginProfile = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getLoginProfile(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('getSshPublicKey', () => {
    it('invokes getSshPublicKey without error', done => {
      const client = new osloginserviceModule.v1.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.oslogin.v1.IGetSshPublicKeyRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getSshPublicKey = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getSshPublicKey(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getSshPublicKey with error', done => {
      const client = new osloginserviceModule.v1.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.oslogin.v1.IGetSshPublicKeyRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getSshPublicKey = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getSshPublicKey(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('importSshPublicKey', () => {
    it('invokes importSshPublicKey without error', done => {
      const client = new osloginserviceModule.v1.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.oslogin.v1.IImportSshPublicKeyRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.importSshPublicKey = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.importSshPublicKey(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes importSshPublicKey with error', done => {
      const client = new osloginserviceModule.v1.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.oslogin.v1.IImportSshPublicKeyRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.importSshPublicKey = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.importSshPublicKey(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('updateSshPublicKey', () => {
    it('invokes updateSshPublicKey without error', done => {
      const client = new osloginserviceModule.v1.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.oslogin.v1.IUpdateSshPublicKeyRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateSshPublicKey = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.updateSshPublicKey(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateSshPublicKey with error', done => {
      const client = new osloginserviceModule.v1.OsLoginServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.oslogin.v1.IUpdateSshPublicKeyRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateSshPublicKey = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.updateSshPublicKey(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
});

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

import * as gax from 'google-gax';
import {APICallback, Callback, CallOptions, Descriptors, ClientOptions} from 'google-gax';
import * as path from 'path';

import * as protosTypes from '../../protos/protos';
import * as gapicConfig from './os_login_service_client_config.json';

const version = require('../../../package.json').version;

/**
 *  Cloud OS Login API
 * 
 *  The Cloud OS Login API allows you to manage users and their associated SSH
 *  public keys for logging into virtual machines on Google Cloud Platform.
 * @class
 * @memberof v1beta
 */
export class OsLoginServiceClient {
  private _descriptors: Descriptors = {page: {}, stream: {}, longrunning: {}};
  private _innerApiCalls: {[name: string]: Function};
  private _pathTemplates: {[name: string]: gax.PathTemplate};
  private _terminated = false;
  auth: gax.GoogleAuth;
  osLoginServiceStub: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of OsLoginServiceClient.
   *
   * @param {object} [options] - The configuration object. See the subsequent
   *   parameters for more details.
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {function} [options.promise] - Custom promise module to use instead
   *     of native Promises.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   */

  constructor(opts?: ClientOptions) {
    // Ensure that options include the service address and port.
    const staticMembers = this.constructor as typeof OsLoginServiceClient;
    const servicePath = opts && opts.servicePath ?
        opts.servicePath :
        ((opts && opts.apiEndpoint) ? opts.apiEndpoint :
                                      staticMembers.servicePath);
    const port = opts && opts.port ? opts.port : staticMembers.port;

    if (!opts) {
      opts = {servicePath, port};
    }
    opts.servicePath = opts.servicePath || servicePath;
    opts.port = opts.port || port;
    opts.clientConfig = opts.clientConfig || {};

    const isBrowser = (typeof window !== 'undefined');
    if (isBrowser){
      opts.fallback = true;
    }
    // If we are in browser, we are already using fallback because of the
    // "browser" field in package.json.
    // But if we were explicitly requested to use fallback, let's do it now.
    const gaxModule = !isBrowser && opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = (this.constructor as typeof OsLoginServiceClient).scopes;
    const gaxGrpc = new gaxModule.GrpcClient(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = (gaxGrpc.auth as gax.GoogleAuth);

    // Determine the client header string.
    const clientHeader = [
      `gax/${gaxModule.version}`,
      `gapic/${version}`,
    ];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    // For Node.js, pass the path to JSON proto file.
    // For browsers, pass the JSON content.

    const nodejsProtoPath = path.join(__dirname, '..', '..', 'protos', 'protos.json');
    const protos = gaxGrpc.loadProto(
      opts.fallback ?
        require("../../protos/protos.json") :
        nodejsProtoPath
    );

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this._pathTemplates = {
      posixAccountPathTemplate: new gaxModule.PathTemplate(
        'users/{user}/projects/{project}'
      ),
      sshPublicKeyPathTemplate: new gaxModule.PathTemplate(
        'users/{user}/sshPublicKeys/{fingerprint}'
      ),
      userPathTemplate: new gaxModule.PathTemplate(
        'users/{user}'
      ),
    };

    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
        'google.cloud.oslogin.v1beta.OsLoginService', gapicConfig as gax.ClientConfig,
        opts.clientConfig || {}, {'x-goog-api-client': clientHeader.join(' ')});

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this._innerApiCalls = {};

    // Put together the "service stub" for
    // google.cloud.oslogin.v1beta.OsLoginService.
    this.osLoginServiceStub = gaxGrpc.createStub(
        opts.fallback ?
          (protos as protobuf.Root).lookupService('google.cloud.oslogin.v1beta.OsLoginService') :
          // tslint:disable-next-line no-any
          (protos as any).google.cloud.oslogin.v1beta.OsLoginService,
        opts) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const osLoginServiceStubMethods =
        ['deletePosixAccount', 'deleteSshPublicKey', 'getLoginProfile', 'getSshPublicKey', 'importSshPublicKey', 'updateSshPublicKey'];

    for (const methodName of osLoginServiceStubMethods) {
      const innerCallPromise = this.osLoginServiceStub.then(
        stub => (...args: Array<{}>) => {
          return stub[methodName].apply(stub, args);
        },
        (err: Error|null|undefined) => () => {
          throw err;
        });

      const apiCall = gaxModule.createApiCall(
        innerCallPromise,
        defaults[methodName],
        this._descriptors.page[methodName] ||
            this._descriptors.stream[methodName] ||
            this._descriptors.longrunning[methodName]
      );

      this._innerApiCalls[methodName] = (
        argument: {},
        callOptions?: CallOptions,
        callback?: APICallback
      ) => {
         if (this._terminated) {
            return Promise.reject('The client has already been closed.');
         }
         return apiCall(argument, callOptions, callback);
      };
    }
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'oslogin.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'oslogin.googleapis.com';
  }

  /**
   * The port for this API service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/cloud-platform.read-only',
      'https://www.googleapis.com/auth/compute',
      'https://www.googleapis.com/auth/compute.readonly'
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @param {function(Error, string)} callback - the callback to
   *   be called with the current project Id.
   */
  getProjectId(callback?: Callback<string, undefined, undefined>):
      Promise<string>|void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
  deletePosixAccount(
      request: protosTypes.google.cloud.oslogin.v1beta.IDeletePosixAccountRequest,
      options?: gax.CallOptions):
      Promise<[
        protosTypes.google.protobuf.IEmpty,
        protosTypes.google.cloud.oslogin.v1beta.IDeletePosixAccountRequest|undefined, {}|undefined
      ]>;
  deletePosixAccount(
      request: protosTypes.google.cloud.oslogin.v1beta.IDeletePosixAccountRequest,
      options: gax.CallOptions,
      callback: Callback<
          protosTypes.google.protobuf.IEmpty,
          protosTypes.google.cloud.oslogin.v1beta.IDeletePosixAccountRequest|undefined,
          {}|undefined>): void;
/**
 * Deletes a POSIX account.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Required. A reference to the POSIX account to update. POSIX accounts are identified
 *   by the project ID they are associated with. A reference to the POSIX
 *   account is in format `users/{user}/projects/{project}`.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Empty]{@link google.protobuf.Empty}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 */
  deletePosixAccount(
      request: protosTypes.google.cloud.oslogin.v1beta.IDeletePosixAccountRequest,
      optionsOrCallback?: gax.CallOptions|Callback<
          protosTypes.google.protobuf.IEmpty,
          protosTypes.google.cloud.oslogin.v1beta.IDeletePosixAccountRequest|undefined, {}|undefined>,
      callback?: Callback<
          protosTypes.google.protobuf.IEmpty,
          protosTypes.google.cloud.oslogin.v1beta.IDeletePosixAccountRequest|undefined,
          {}|undefined>):
      Promise<[
        protosTypes.google.protobuf.IEmpty,
        protosTypes.google.cloud.oslogin.v1beta.IDeletePosixAccountRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'name': request.name || '',
    });
    return this._innerApiCalls.deletePosixAccount(request, options, callback);
  }
  deleteSshPublicKey(
      request: protosTypes.google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest,
      options?: gax.CallOptions):
      Promise<[
        protosTypes.google.protobuf.IEmpty,
        protosTypes.google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest|undefined, {}|undefined
      ]>;
  deleteSshPublicKey(
      request: protosTypes.google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest,
      options: gax.CallOptions,
      callback: Callback<
          protosTypes.google.protobuf.IEmpty,
          protosTypes.google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest|undefined,
          {}|undefined>): void;
/**
 * Deletes an SSH public key.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Required. The fingerprint of the public key to update. Public keys are identified by
 *   their SHA-256 fingerprint. The fingerprint of the public key is in format
 *   `users/{user}/sshPublicKeys/{fingerprint}`.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [Empty]{@link google.protobuf.Empty}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 */
  deleteSshPublicKey(
      request: protosTypes.google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest,
      optionsOrCallback?: gax.CallOptions|Callback<
          protosTypes.google.protobuf.IEmpty,
          protosTypes.google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest|undefined, {}|undefined>,
      callback?: Callback<
          protosTypes.google.protobuf.IEmpty,
          protosTypes.google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest|undefined,
          {}|undefined>):
      Promise<[
        protosTypes.google.protobuf.IEmpty,
        protosTypes.google.cloud.oslogin.v1beta.IDeleteSshPublicKeyRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'name': request.name || '',
    });
    return this._innerApiCalls.deleteSshPublicKey(request, options, callback);
  }
  getLoginProfile(
      request: protosTypes.google.cloud.oslogin.v1beta.IGetLoginProfileRequest,
      options?: gax.CallOptions):
      Promise<[
        protosTypes.google.cloud.oslogin.v1beta.ILoginProfile,
        protosTypes.google.cloud.oslogin.v1beta.IGetLoginProfileRequest|undefined, {}|undefined
      ]>;
  getLoginProfile(
      request: protosTypes.google.cloud.oslogin.v1beta.IGetLoginProfileRequest,
      options: gax.CallOptions,
      callback: Callback<
          protosTypes.google.cloud.oslogin.v1beta.ILoginProfile,
          protosTypes.google.cloud.oslogin.v1beta.IGetLoginProfileRequest|undefined,
          {}|undefined>): void;
/**
 * Retrieves the profile information used for logging in to a virtual machine
 * on Google Compute Engine.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Required. The unique ID for the user in format `users/{user}`.
 * @param {string} request.projectId
 *   The project ID of the Google Cloud Platform project.
 * @param {string} request.systemId
 *   A system ID for filtering the results of the request.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [LoginProfile]{@link google.cloud.oslogin.v1beta.LoginProfile}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 */
  getLoginProfile(
      request: protosTypes.google.cloud.oslogin.v1beta.IGetLoginProfileRequest,
      optionsOrCallback?: gax.CallOptions|Callback<
          protosTypes.google.cloud.oslogin.v1beta.ILoginProfile,
          protosTypes.google.cloud.oslogin.v1beta.IGetLoginProfileRequest|undefined, {}|undefined>,
      callback?: Callback<
          protosTypes.google.cloud.oslogin.v1beta.ILoginProfile,
          protosTypes.google.cloud.oslogin.v1beta.IGetLoginProfileRequest|undefined,
          {}|undefined>):
      Promise<[
        protosTypes.google.cloud.oslogin.v1beta.ILoginProfile,
        protosTypes.google.cloud.oslogin.v1beta.IGetLoginProfileRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'name': request.name || '',
    });
    return this._innerApiCalls.getLoginProfile(request, options, callback);
  }
  getSshPublicKey(
      request: protosTypes.google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest,
      options?: gax.CallOptions):
      Promise<[
        protosTypes.google.cloud.oslogin.common.ISshPublicKey,
        protosTypes.google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest|undefined, {}|undefined
      ]>;
  getSshPublicKey(
      request: protosTypes.google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest,
      options: gax.CallOptions,
      callback: Callback<
          protosTypes.google.cloud.oslogin.common.ISshPublicKey,
          protosTypes.google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest|undefined,
          {}|undefined>): void;
/**
 * Retrieves an SSH public key.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Required. The fingerprint of the public key to retrieve. Public keys are identified
 *   by their SHA-256 fingerprint. The fingerprint of the public key is in
 *   format `users/{user}/sshPublicKeys/{fingerprint}`.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [SshPublicKey]{@link google.cloud.oslogin.common.SshPublicKey}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 */
  getSshPublicKey(
      request: protosTypes.google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest,
      optionsOrCallback?: gax.CallOptions|Callback<
          protosTypes.google.cloud.oslogin.common.ISshPublicKey,
          protosTypes.google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest|undefined, {}|undefined>,
      callback?: Callback<
          protosTypes.google.cloud.oslogin.common.ISshPublicKey,
          protosTypes.google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest|undefined,
          {}|undefined>):
      Promise<[
        protosTypes.google.cloud.oslogin.common.ISshPublicKey,
        protosTypes.google.cloud.oslogin.v1beta.IGetSshPublicKeyRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'name': request.name || '',
    });
    return this._innerApiCalls.getSshPublicKey(request, options, callback);
  }
  importSshPublicKey(
      request: protosTypes.google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest,
      options?: gax.CallOptions):
      Promise<[
        protosTypes.google.cloud.oslogin.v1beta.IImportSshPublicKeyResponse,
        protosTypes.google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest|undefined, {}|undefined
      ]>;
  importSshPublicKey(
      request: protosTypes.google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest,
      options: gax.CallOptions,
      callback: Callback<
          protosTypes.google.cloud.oslogin.v1beta.IImportSshPublicKeyResponse,
          protosTypes.google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest|undefined,
          {}|undefined>): void;
/**
 * Adds an SSH public key and returns the profile information. Default POSIX
 * account information is set when no username and UID exist as part of the
 * login profile.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   The unique ID for the user in format `users/{user}`.
 * @param {google.cloud.oslogin.common.SshPublicKey} request.sshPublicKey
 *   Required. The SSH public key and expiration time.
 * @param {string} request.projectId
 *   The project ID of the Google Cloud Platform project.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [ImportSshPublicKeyResponse]{@link google.cloud.oslogin.v1beta.ImportSshPublicKeyResponse}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 */
  importSshPublicKey(
      request: protosTypes.google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest,
      optionsOrCallback?: gax.CallOptions|Callback<
          protosTypes.google.cloud.oslogin.v1beta.IImportSshPublicKeyResponse,
          protosTypes.google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest|undefined, {}|undefined>,
      callback?: Callback<
          protosTypes.google.cloud.oslogin.v1beta.IImportSshPublicKeyResponse,
          protosTypes.google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest|undefined,
          {}|undefined>):
      Promise<[
        protosTypes.google.cloud.oslogin.v1beta.IImportSshPublicKeyResponse,
        protosTypes.google.cloud.oslogin.v1beta.IImportSshPublicKeyRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'parent': request.parent || '',
    });
    return this._innerApiCalls.importSshPublicKey(request, options, callback);
  }
  updateSshPublicKey(
      request: protosTypes.google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest,
      options?: gax.CallOptions):
      Promise<[
        protosTypes.google.cloud.oslogin.common.ISshPublicKey,
        protosTypes.google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest|undefined, {}|undefined
      ]>;
  updateSshPublicKey(
      request: protosTypes.google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest,
      options: gax.CallOptions,
      callback: Callback<
          protosTypes.google.cloud.oslogin.common.ISshPublicKey,
          protosTypes.google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest|undefined,
          {}|undefined>): void;
/**
 * Updates an SSH public key and returns the profile information. This method
 * supports patch semantics.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.name
 *   Required. The fingerprint of the public key to update. Public keys are identified by
 *   their SHA-256 fingerprint. The fingerprint of the public key is in format
 *   `users/{user}/sshPublicKeys/{fingerprint}`.
 * @param {google.cloud.oslogin.common.SshPublicKey} request.sshPublicKey
 *   Required. The SSH public key and expiration time.
 * @param {google.protobuf.FieldMask} request.updateMask
 *   Mask to control which fields get updated. Updates all if not present.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing [SshPublicKey]{@link google.cloud.oslogin.common.SshPublicKey}.
 *   The promise has a method named "cancel" which cancels the ongoing API call.
 */
  updateSshPublicKey(
      request: protosTypes.google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest,
      optionsOrCallback?: gax.CallOptions|Callback<
          protosTypes.google.cloud.oslogin.common.ISshPublicKey,
          protosTypes.google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest|undefined, {}|undefined>,
      callback?: Callback<
          protosTypes.google.cloud.oslogin.common.ISshPublicKey,
          protosTypes.google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest|undefined,
          {}|undefined>):
      Promise<[
        protosTypes.google.cloud.oslogin.common.ISshPublicKey,
        protosTypes.google.cloud.oslogin.v1beta.IUpdateSshPublicKeyRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: gax.CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as gax.CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      'name': request.name || '',
    });
    return this._innerApiCalls.updateSshPublicKey(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified posixaccount resource name string.
   *
   * @param {string} user
   * @param {string} project
   * @returns {string} Resource name string.
   */
  posixaccountPath(user:string,project:string) {
    return this._pathTemplates.posixaccountPathTemplate.render({
      user: user,
      project: project,
    });
  }

  /**
   * Parse the user from PosixAccount resource.
   *
   * @param {string} posixaccountName
   *   A fully-qualified path representing PosixAccount resource.
   * @returns {string} A string representing the user.
   */
  matchUserFromPosixAccountName(posixaccountName: string) {
    return this._pathTemplates.posixaccountPathTemplate.match(posixaccountName).user;
  }

  /**
   * Parse the project from PosixAccount resource.
   *
   * @param {string} posixaccountName
   *   A fully-qualified path representing PosixAccount resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromPosixAccountName(posixaccountName: string) {
    return this._pathTemplates.posixaccountPathTemplate.match(posixaccountName).project;
  }

  /**
   * Return a fully-qualified sshpublickey resource name string.
   *
   * @param {string} user
   * @param {string} fingerprint
   * @returns {string} Resource name string.
   */
  sshpublickeyPath(user:string,fingerprint:string) {
    return this._pathTemplates.sshpublickeyPathTemplate.render({
      user: user,
      fingerprint: fingerprint,
    });
  }

  /**
   * Parse the user from SshPublicKey resource.
   *
   * @param {string} sshpublickeyName
   *   A fully-qualified path representing SshPublicKey resource.
   * @returns {string} A string representing the user.
   */
  matchUserFromSshPublicKeyName(sshpublickeyName: string) {
    return this._pathTemplates.sshpublickeyPathTemplate.match(sshpublickeyName).user;
  }

  /**
   * Parse the fingerprint from SshPublicKey resource.
   *
   * @param {string} sshpublickeyName
   *   A fully-qualified path representing SshPublicKey resource.
   * @returns {string} A string representing the fingerprint.
   */
  matchFingerprintFromSshPublicKeyName(sshpublickeyName: string) {
    return this._pathTemplates.sshpublickeyPathTemplate.match(sshpublickeyName).fingerprint;
  }

  /**
   * Return a fully-qualified user resource name string.
   *
   * @param {string} user
   * @returns {string} Resource name string.
   */
  userPath(user:string) {
    return this._pathTemplates.userPathTemplate.render({
      user: user,
    });
  }

  /**
   * Parse the user from User resource.
   *
   * @param {string} userName
   *   A fully-qualified path representing User resource.
   * @returns {string} A string representing the user.
   */
  matchUserFromUserName(userName: string) {
    return this._pathTemplates.userPathTemplate.match(userName).user;
  }

  /**
   * Terminate the GRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   */
  close(): Promise<void> {
    if (!this._terminated) {
      return this.osLoginServiceStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}

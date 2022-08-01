/**
 * Red Hat Openshift SmartEvents Fleet Manager
 * The API exposed by the fleet manager of the SmartEvents service.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: openbridge-dev@redhat.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     *
     * @type {string}
     * @memberof ErrorResponse
     */
    'kind': string;
    /**
     *
     * @type {string}
     * @memberof ErrorResponse
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof ErrorResponse
     */
    'name'?: string;
    /**
     *
     * @type {string}
     * @memberof ErrorResponse
     */
    'href': string;
    /**
     *
     * @type {string}
     * @memberof ErrorResponse
     */
    'code': string;
    /**
     *
     * @type {string}
     * @memberof ErrorResponse
     */
    'reason': string;
}

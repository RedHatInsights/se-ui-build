/**
 * Red Hat Openshift SmartEvents Fleet Manager
 * The api exposed by the fleet manager of the SmartEvents service.
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
 * @enum {string}
 */
export declare const ManagedResourceStatus: {
    readonly Accepted: "accepted";
    readonly Preparing: "preparing";
    readonly Provisioning: "provisioning";
    readonly Ready: "ready";
    readonly Deprovision: "deprovision";
    readonly Deleting: "deleting";
    readonly Deleted: "deleted";
    readonly Failed: "failed";
};
export declare type ManagedResourceStatus = typeof ManagedResourceStatus[keyof typeof ManagedResourceStatus];

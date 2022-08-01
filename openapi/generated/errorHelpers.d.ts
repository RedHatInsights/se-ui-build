import { AxiosError } from "axios";
import { ModelError } from "@openapi/generated/model";
/**
 * Check if the error code originates from the API
 *
 * @param error generic error returned from function
 * @returns true if error originated from the API
 */
export declare const isServiceApiError: (error: unknown) => error is AxiosError<any, any>;
/**
 * Get the first error item returned from the API
 *
 * @param error generic error returned from function
 * @returns error item (a single ErrorResponse)
 */
export declare const getFirstError: (error: unknown) => ModelError | undefined;
/**
 * Get the error code related to the first error item returned from the API
 *
 * @param error generic error returned from function
 * @returns error code (one of fields of APIErrorCodes)
 */
export declare const getErrorCode: (error: unknown) => string | undefined;
/**
 * Get the error reason related to the first error item returned from the API
 *
 * @param error generic error returned from function
 * @returns error reason
 */
export declare const getErrorReason: (error: unknown) => string | undefined;

import { FieldValidation } from "../../../types/Processor";
export declare function useValidationBase(): {
    isRequired: (value: string) => FieldValidation;
    isHTTPUrl: (value: string) => FieldValidation;
};

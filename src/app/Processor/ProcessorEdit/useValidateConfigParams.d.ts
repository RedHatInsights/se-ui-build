import { Action, Source } from "@openapi/generated";
import { ConfigType, ProcessorValidation } from "../../../types/Processor";
export declare function useValidateConfigParams(config: Action | Source | undefined, configTypes: ConfigType[]): {
    validation: ProcessorValidation;
    validate: () => boolean;
    resetValidation: (propertyName: string) => void;
    validateField: (typeName: string, propertyName: string) => boolean;
};

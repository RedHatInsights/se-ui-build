import { ProcessorFormData, ProcessorValidation } from "../../../types/Processor";
export declare function useValidateProcessor(processor: ProcessorFormData, existingProcessorName?: string): {
    validate: () => boolean;
    validation: ProcessorValidation;
    validateName: () => boolean;
    validateProcessorType: () => boolean;
    registerValidateConfig: (action: () => boolean) => void;
    resetValidation: (propertyName: string) => void;
    existingProcessorName?: string;
};

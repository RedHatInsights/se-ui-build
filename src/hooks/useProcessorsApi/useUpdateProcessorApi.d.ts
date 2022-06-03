import { ProcessorResponse, ProcessorRequest } from "@openapi/generated";
export declare function useUpdateProcessorApi(): {
    updateProcessor: (bridgeId: string, processorId: string, processorRequest: ProcessorRequest) => void;
    processor?: ProcessorResponse;
    isLoading: boolean;
    error: unknown;
};

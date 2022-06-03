import { ProcessorResponse, ProcessorRequest } from "@openapi/generated";
export declare function useAddProcessorToBridgeApi(): {
    addProcessorToBridge: (bridgeId: string, processorRequest: ProcessorRequest) => void;
    processor?: ProcessorResponse;
    isLoading: boolean;
    error: unknown;
};

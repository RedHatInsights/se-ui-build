import { ProcessorResponse } from "@openapi/generated";
export declare function useGetProcessorApi(): {
    getProcessor: (bridgeId: string, processorId: string) => void;
    processor?: ProcessorResponse;
    isLoading: boolean;
    error: unknown;
};

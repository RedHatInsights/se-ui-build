import { ProcessorListResponse, ProcessorType } from "@openapi/generated";
export declare function useGetProcessorsApi(): {
    getProcessors: (bridgeId: string, pageReq?: number, sizeReq?: number, processorType?: ProcessorType, isPolling?: boolean) => void;
    processorListResponse?: ProcessorListResponse;
    isLoading: boolean;
    error: unknown;
};

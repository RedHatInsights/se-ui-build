import { ProcessorListResponse } from "@openapi/generated";
export declare function useGetProcessorsApi(): {
    getProcessors: (bridgeId: string, pageReq?: number, sizeReq?: number, isPolling?: boolean) => void;
    processorListResponse?: ProcessorListResponse;
    isLoading: boolean;
    error: unknown;
};

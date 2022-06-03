import { BridgeListResponse } from "@openapi/generated";
export declare function useGetBridgesApi(): {
    getBridges: (pageReq?: number, sizeReq?: number, isPolling?: boolean) => void;
    bridgeListResponse?: BridgeListResponse;
    isLoading: boolean;
    error: unknown;
};

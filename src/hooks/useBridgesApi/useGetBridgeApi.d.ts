import { BridgeResponse } from "@openapi/generated";
export declare function useGetBridgeApi(): {
    getBridge: (bridgeId: string) => void;
    bridge?: BridgeResponse;
    isLoading: boolean;
    error: unknown;
};

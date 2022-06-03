import { BridgeRequest, BridgeResponse } from "@openapi/generated";
export declare function useCreateBridgeApi(): {
    createBridge: (bridgeRequest: BridgeRequest) => void;
    bridge?: BridgeResponse;
    isLoading: boolean;
    error: unknown;
};

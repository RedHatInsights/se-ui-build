import { BridgeError } from "@openapi/generated";
export declare function useGetErrorApi(getToken: () => Promise<string>, basePath: string): {
    getError: (errorId: number) => Promise<void>;
    error?: BridgeError;
    caughtError?: unknown;
    isLoading: boolean;
};

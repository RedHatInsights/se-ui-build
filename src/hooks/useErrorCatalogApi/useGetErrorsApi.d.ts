import { ErrorResponse } from "@openapi/generated";
export declare function useGetErrorsApi(getToken: () => Promise<string>, basePath: string): {
    getErrors: () => Promise<void>;
    errors?: ErrorResponse[];
    page?: number;
    size?: number;
    total?: number;
    caughtError?: unknown;
    isLoading: boolean;
};

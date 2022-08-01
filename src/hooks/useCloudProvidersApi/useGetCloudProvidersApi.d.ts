import { CloudProviderResponse } from "@openapi/generated";
export declare function useGetCloudProvidersApi(): {
    getCloudProviders: GetCloudProviders;
};
export declare type GetCloudProviders = () => Promise<CloudProviderResponse[]>;

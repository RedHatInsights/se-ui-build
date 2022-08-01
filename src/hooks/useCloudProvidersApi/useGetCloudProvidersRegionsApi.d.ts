import { CloudRegionResponse } from "@openapi/generated";
export declare function useGetCloudProvidersRegions(): {
    getCloudProviderRegions: GetCloudProvidersRegion;
};
export declare type GetCloudProvidersRegion = (cloudProviderId: string) => Promise<CloudRegionResponse[] | undefined>;

import { CloudProviderResponse, CloudRegionResponse } from "@openapi/generated";
import "./CloudProviderSelection.css";
interface CloudProviderSelectionProps {
    cloudProviders: CloudProviderResponse[];
    cloudRegions: CloudRegionResponse[] | undefined;
    onCloudProviderChange: (providerId: string, regionId: string) => void;
    isDisabled: boolean;
}
declare const CloudProviderSelection: (props: CloudProviderSelectionProps) => JSX.Element;
export default CloudProviderSelection;
export declare const CloudProviderSelectionSkeleton: () => JSX.Element;

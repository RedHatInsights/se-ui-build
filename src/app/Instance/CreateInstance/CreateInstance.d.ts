import { GetCloudProviders } from "../../../hooks/useCloudProvidersApi/useGetCloudProvidersApi";
import { GetCloudProvidersRegion } from "../../../hooks/useCloudProvidersApi/useGetCloudProvidersRegionsApi";
export interface CreateInstanceProps {
    /** Flag to indicate the creation request is in progress */
    isLoading: boolean;
    /** Flag to show/hide the modal */
    isModalOpen: boolean;
    /** Callback to close the modal */
    onClose: () => void;
    /** Callback to create the instance */
    onCreate: (name: string, cloudProviderId: string, cloudRegionId: string) => void;
    /** API error related to bridge creation */
    createBridgeError: unknown;
    /** Callback to retrieve cloud providers options **/
    getCloudProviders: GetCloudProviders;
    /** Callback to retrieve cloud regions options **/
    getCloudRegions: GetCloudProvidersRegion;
}
declare const CreateInstance: (props: CreateInstanceProps) => JSX.Element;
export default CreateInstance;

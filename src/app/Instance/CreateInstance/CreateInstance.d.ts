export interface CreateInstanceProps {
    /** Flag to indicate the creation request is in progress */
    isLoading: boolean;
    /** Flag to show/hide the modal */
    isModalOpen: boolean;
    /** Callback to close the modal */
    onClose: () => void;
    /** Callback to create the instance */
    onCreate: (name: string) => void;
    /** invalid instance name used to create an instance */
    existingInstanceName?: string;
}
declare const CreateInstance: (props: CreateInstanceProps) => JSX.Element;
export default CreateInstance;

import "./DeleteModal.css";
export interface DeleteModalProps {
    /** Component ID according to the OUIA standard */
    ouiaId: string;
    /** Flag to show/hide the modal */
    showDialog: boolean;
    /** The title of the modal */
    modalTitle: string;
    /** The name of the resource to delete */
    resourceName: string | undefined;
    /** The type of the resource to delete (i.e. "Processor" or "Smart Event Instance" etc.) */
    resourceType: string | undefined;
    /** Callback executed when the deletion is canceled */
    onCancel: () => void;
    /** Callback executed when the deletion is confirmed */
    onConfirm: () => void;
    /** Flag to indicate if the deletion is in progress */
    isLoading: boolean;
    /** Flag to indicate if a preload is in progress to check if the deletion is possible */
    isPreloading: boolean;
    /** Reason why the deletion is not possible */
    blockedDeletionReason?: string;
}
export declare const DeleteModal: (props: DeleteModalProps) => JSX.Element;

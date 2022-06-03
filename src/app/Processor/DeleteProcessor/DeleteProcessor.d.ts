interface DeleteProcessorProps {
    /** Flag to show/close the modal */
    showDeleteModal: boolean;
    /** The id of the bridge where the processor belongs */
    bridgeId: string;
    /** The id of the processor to delete */
    processorId?: string;
    /** The name of the processor to delete */
    processorName?: string;
    /** Callback executed when the deletion is confirmed */
    onDeleted: () => void;
    /** Callback executed when the deletion is canceled */
    onCanceled: () => void;
}
declare const DeleteProcessor: (props: DeleteProcessorProps) => JSX.Element;
export default DeleteProcessor;

interface DeleteInstanceProps {
    /** Flag to show/close the modal */
    showDeleteModal: boolean;
    /** The id of the instance to delete */
    instanceId?: string;
    /** The name of the instance to delete */
    instanceName?: string;
    /** Callback executed when the deletion is confirmed */
    onDeleted: () => void;
    /** Callback executed when the deletion is canceled */
    onCanceled: () => void;
}
declare const DeleteInstance: (props: DeleteInstanceProps) => JSX.Element;
export default DeleteInstance;

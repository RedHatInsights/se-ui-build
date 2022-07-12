export interface ActionModalProps {
    /** Action to execute when the modal gets closed */
    action: () => void;
    /** Message to display in the modal body */
    message: string;
    /** Optional ouia identifier */
    ouiaId?: string;
    /** Flag to show/hide the modal */
    showDialog: boolean;
    /** Modal title */
    title: string;
}
export declare const ActionModal: ({ action, message, ouiaId, showDialog, title, }: ActionModalProps) => JSX.Element;

import { Action } from "@openapi/generated";
interface ActionEditProps {
    action?: Action;
    onChange: (action: Action) => void;
    registerValidation: (validationFunction: () => boolean) => void;
}
declare const ActionEdit: (props: ActionEditProps) => JSX.Element;
export default ActionEdit;

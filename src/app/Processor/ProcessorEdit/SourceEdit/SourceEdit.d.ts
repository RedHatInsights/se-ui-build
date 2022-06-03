import { Source } from "@openapi/generated";
interface SourceEditProps {
    source?: Source;
    onChange: (source: Source) => void;
    registerValidation: (validationFunction: () => boolean) => void;
}
declare const SourceEdit: (props: SourceEditProps) => JSX.Element;
export default SourceEdit;

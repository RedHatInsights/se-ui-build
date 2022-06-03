/// <reference types="react" />
import { ProcessorRequest, ProcessorResponse } from "@openapi/generated";
import "./ProcessorEdit.css";
interface ProcessorEditProps {
    processor?: ProcessorResponse;
    existingProcessorName?: string;
    isLoading: boolean;
    saveButtonLabel: string;
    onSave: (requestData: ProcessorRequest) => void;
    onCancel: () => void;
    processorTypeSection?: JSX.Element;
}
declare const ProcessorEdit: (props: ProcessorEditProps) => JSX.Element;
export default ProcessorEdit;

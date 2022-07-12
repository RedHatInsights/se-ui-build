import { ProcessorRequest, ProcessorResponse, ProcessorSchemaEntryResponse } from "@openapi/generated";
import { GetSchema } from "../../../hooks/useSchemasApi/useGetSchemaApi";
import "./ProcessorEdit.css";
export interface ProcessorEditProps {
    /** The processor data to populate the form. Used when updating an existing processor.
     * Not required when creating a new processor */
    processor?: ProcessorResponse;
    /** Flag indicating if the save request is loading */
    isLoading: boolean;
    /** Label for the "Save" button */
    saveButtonLabel: string;
    /** Callback for when the save button is clicked */
    onSave: (requestData: ProcessorRequest) => void;
    /** Callback for when the cancel button is clicked */
    onCancel: () => void;
    /** Already existing processor name that prevents from saving the processor */
    existingProcessorName?: string;
    /** Catalog of all the actions/sources */
    schemaCatalog: ProcessorSchemaEntryResponse[];
    /** Callback to retrieve a single action/source schema */
    getSchema: GetSchema;
}
declare const ProcessorEdit: (props: ProcessorEditProps) => JSX.Element;
export default ProcessorEdit;

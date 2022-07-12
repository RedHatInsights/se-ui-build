import { Processor } from "../../../types/Processor";
import "./ProcessorDetail.css";
import { ProcessorSchemaEntryResponse } from "@openapi/generated";
import { GetSchema } from "../../../hooks/useSchemasApi/useGetSchemaApi";
interface ProcessorDetailProps {
    /** The processor to display */
    processor: Processor;
    /** Catalog of all the actions/sources */
    schemaCatalog: ProcessorSchemaEntryResponse[];
    /** Callback to retrieve a single action/source schema */
    getSchema: GetSchema;
}
declare const ProcessorDetail: (props: ProcessorDetailProps) => JSX.Element;
export default ProcessorDetail;

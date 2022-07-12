import { JSONSchema7 } from "json-schema";
import { DataShapeValue } from "../../../types/Processor";
interface ProcessorDetailConfigParametersProps {
    schema: JSONSchema7;
    parameters: {
        [key: string]: unknown;
    };
}
declare const ProcessorDetailConfigParameters: (props: ProcessorDetailConfigParametersProps) => JSX.Element;
export default ProcessorDetailConfigParameters;
export declare const DataShape: ({ data }: {
    data: DataShapeValue;
}) => JSX.Element;

import { Action, ProcessorSchemaEntryResponse, Source } from "@openapi/generated";
import { GetSchema } from "../../../../hooks/useSchemasApi/useGetSchemaApi";
import { ProcessorSchemaType } from "../../../../types/Processor";
declare type ConfigurationEditProps = ActionConfig | SourceConfig;
declare const ConfigurationEdit: (props: ConfigurationEditProps) => JSX.Element;
export default ConfigurationEdit;
interface ActionConfig extends BaseConfig {
    configType: ProcessorSchemaType.ACTION;
    action?: Action;
    onChange: (action: Action) => void;
}
interface SourceConfig extends BaseConfig {
    configType: ProcessorSchemaType.SOURCE;
    source?: Source;
    onChange: (source: Source) => void;
}
interface BaseConfig {
    registerValidation: (validationFunction: () => boolean) => void;
    readOnly?: boolean;
    schemaCatalog: ProcessorSchemaEntryResponse[];
    getSchema: GetSchema;
}

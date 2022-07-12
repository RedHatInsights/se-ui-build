import { ProcessorSchemaType } from "../../types/Processor";
export declare function useGetSchemaApi(): {
    getSchema: GetSchema;
    error: unknown;
};
export declare type GetSchema = (schemaId: string, schemaType: ProcessorSchemaType) => Promise<object>;

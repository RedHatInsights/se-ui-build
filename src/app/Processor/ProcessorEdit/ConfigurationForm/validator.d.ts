import { ValidateFunction } from "ajv";
export declare function createValidator(schema: object): CreateValidator;
interface CreateValidator {
    (model: object): {
        details: ValidateFunction["errors"];
    } | null;
}
export {};

/// <reference types="react" />
export interface ResponseError {
    kind: "Error";
    id: string;
    href: string;
    code: string;
    reason: string;
}
export declare class ErrorWithDetail extends Error {
    detailSection?: JSX.Element;
    constructor(detailSection?: JSX.Element, message?: string);
}

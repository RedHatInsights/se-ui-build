import React from "react";
import { BridgeResponse } from "@openapi/generated";
interface InstanceDetailsProps {
    instance: BridgeResponse;
    onClosingDetails: (event: React.MouseEvent<HTMLDivElement>) => void;
}
export declare const InstanceDetails: ({ instance, onClosingDetails, }: InstanceDetailsProps) => JSX.Element;
export {};

import { FunctionComponent } from "react";
interface BreadcrumbProps {
    /** Path describing the whole breadcrumb */
    path: {
        /** Linking this path item with a specific location */
        linkTo?: string;
        /** Label for this path item */
        label: string;
    }[];
}
export declare const Breadcrumb: FunctionComponent<BreadcrumbProps>;
export {};

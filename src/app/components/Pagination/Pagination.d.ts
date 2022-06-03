import { FunctionComponent } from "react";
import { PaginationVariant } from "@patternfly/react-core";
interface PaginationProps {
    /** Custom class name */
    className?: string;
    /** Number of elements */
    itemCount: number;
    /** Current page number */
    page: number;
    /** Number of elements displayed for each page */
    perPage: number;
    /** Function triggered when the page number, or the number of elements displayed in each page, get changed */
    onChange: (page: number, perPage: number) => void;
    /** Indicates if pagination is compact  */
    isCompact?: boolean;
    /** Pagination variant */
    variant?: PaginationVariant;
    /** data-ouia-component-id identifier for automated UI testing */
    ouiaId?: string;
}
export declare const Pagination: FunctionComponent<PaginationProps>;
export {};

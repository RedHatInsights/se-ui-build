import React, { FunctionComponent } from "react";
import { RenderActions, TableColumn, TableRow } from "@app/components/Table";
interface TableWithPaginationProps {
    /** List of columns for the table */
    columns: TableColumn[];
    /** List of rows for the table */
    rows: TableRow[];
    /** The total number of rows for the table */
    totalRows: number;
    /** The current page number (0-based) */
    pageNumber: number;
    /** The page size */
    pageSize: number;
    /** Called when pagination params are changed by the user */
    onPaginationChange: (pageNumber: number, pageSize: number) => void;
    /** Table label */
    tableLabel: string;
    /** Custom element you want to be in the toolbar */
    customToolbarElement?: React.ReactNode;
    /** True, when table data is loading */
    isLoading?: boolean;
    /** Element to be rendered when there are no rows to display */
    children?: JSX.Element;
    /** Render function to add actions to the table */
    renderActions?: RenderActions;
}
export declare const FIRST_PAGE = 0;
export declare const DEFAULT_PAGE_SIZE = 10;
/**
 * The goal of this component is to provide a reusable template composed by:
 * - Toolbar (with top-pagination)
 * - Table
 * - bottom-pagination
 */
export declare const TableWithPagination: FunctionComponent<TableWithPaginationProps>;
export {};

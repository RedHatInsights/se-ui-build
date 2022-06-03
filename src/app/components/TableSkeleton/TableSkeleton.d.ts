import { TableColumn } from "@app/components/Table";
export interface TableSkeletonProps {
    /** List of columns for the table */
    columns: TableColumn[];
    /** The total number of rows for the table */
    totalRows: number;
    /** True, if table has action column */
    hasActionColumn: boolean;
}
export declare const TableSkeleton: ({ columns, totalRows, hasActionColumn, }: TableSkeletonProps) => JSX.Element;

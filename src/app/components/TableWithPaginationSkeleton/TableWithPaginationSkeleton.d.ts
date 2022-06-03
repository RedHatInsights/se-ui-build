import React from "react";
import { TableSkeletonProps } from "@app/components/TableSkeleton/TableSkeleton";
interface TableWithPaginationSkeletonProps {
    /** Custom element you want to be in the toolbar */
    customToolbarElement?: React.ReactNode;
}
export declare const TableWithPaginationSkeleton: (props: TableSkeletonProps & TableWithPaginationSkeletonProps) => JSX.Element;
export {};

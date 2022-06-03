import { FunctionComponent, ReactElement } from "react";
import { ActionsColumn, ActionsColumnProps, IRowData } from "@patternfly/react-table";
export interface TableColumn {
    /** Column identifier */
    accessor: string;
    /** Displayed label */
    label: string;
    /** Custom function to be used to render differently all values on this column */
    formatter?: (value: IRowData, row?: TableRow) => string | IRowData;
}
export interface TableRow extends IRowData {
    /** Additive property which stores the entire object row data */
    originalData?: IRowData;
}
export declare type RenderActions = <TRow>(props: {
    /** PF ActionsColumn component used to render the actions  */
    ActionsColumn: typeof ActionsColumn;
    /** The row data passed to the actions */
    row: TRow;
}) => ReactElement<ActionsColumnProps> | undefined;
interface TableProps {
    /** Accessible name for the table */
    ariaLabel?: string;
    /** Columns to display */
    columns: TableColumn[];
    /** List of additive css classes */
    cssClasses?: string | string[];
    /** Collection of cells to render */
    rows: TableRow[];
    /** Style variant for the table */
    variant?: "compact";
    /** Element to be rendered when there are no rows to display */
    children?: JSX.Element;
    /** Render function to add actions to the table */
    renderActions?: RenderActions;
}
export declare const Table: FunctionComponent<TableProps>;
export {};

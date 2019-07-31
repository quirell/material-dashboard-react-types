import * as React from "react";

export interface TableProps {
    classes?: any,
    tableHeaderColor?: "primary" | "info" | "success" | "warning" | "danger" | "rose" | "gray",
    tableHead?: any[],
    tableData?: any[][]
}

export default class Table extends React.Component<TableProps> {

}
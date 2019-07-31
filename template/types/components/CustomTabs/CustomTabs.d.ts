import * as React from "react";

export interface CustomTabsProps {
    classes?: any,
    headerColor?:
        "warning" |
        "success" |
        "danger" |
        "info" |
        "primary" |
        "rose",
    title?: string,
    tabs?: {
        tabName: string,
        tabIcon: string | React.ReactNode;
        tabContent: React.ReactNode
    }[],
    plainTabs?: boolean
}

export default class CustomTabs extends React.Component<CustomTabsProps> {
}
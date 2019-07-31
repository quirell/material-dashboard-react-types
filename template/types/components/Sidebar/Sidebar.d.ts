import * as React from "react";

interface Route {
    layout: string,
    path: string,
    name: string,
}


export interface SidebarProps {
    classes?: any,
    color?: "purple" | "blue" | "green" | "orange" | "red",
    handleDrawerToggle?: {
        bivarianceHack(event: {}, reason: 'backdropClick' | 'escapeKeyDown'): void;
    }['bivarianceHack'],
    logo?: string,
    image?: string,
    logoText?: string,
    routes?: Route[],
    open?: boolean
}

export default class Sidebar extends React.Component<SidebarProps> {
}
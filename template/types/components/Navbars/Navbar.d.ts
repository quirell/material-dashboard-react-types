import * as React from "react";
import {MouseEventHandler} from "react";
import {IconButton} from "@material-ui/core";

interface Route {
    layout: string,
    path: string,
    name: string,
}


export interface NavbarProps {
    classes?: any,
    color?: "primary" | "info" | "success" | "warning" | "danger",
    handleDrawerToggle?: MouseEventHandler<IconButton>,
    routes?: Route[]
}

export default class Navbar extends React.Component<NavbarProps> {
}
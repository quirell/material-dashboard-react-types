import * as React from "react";
import {MouseEventHandler, ReactNode} from "react";
import {IconButton, SvgIcon} from "@material-ui/core";

interface Route {
    layout: string,
    path: string,
    name: string,
}


export interface SnackbarProps {
    classes?: any,
    message: ReactNode
    color?: "primary" | "info" | "success" | "warning" | "danger",
    close: boolean,
    icon?: SvgIcon,
    open?: boolean,
    closeNotification?: MouseEventHandler<IconButton>,
    routes?: Route[]
}

export default class Snackbar extends React.Component<SnackbarProps> {
}
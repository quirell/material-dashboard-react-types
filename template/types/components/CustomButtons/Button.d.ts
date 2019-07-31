import * as React from "react";
import {ButtonProps} from "@material-ui/core/Button";

export interface RegularButtonProps extends ButtonProps {
    classes?: any,
    color?:
        "primary" |
        "info" |
        "success" |
        "warning" |
        "danger" |
        "rose" |
        "white" |
        "transparent",
    size?: "sm" | "lg",
    simple?: boolean,
    round?: boolean,
    disabled?: boolean,
    block?: boolean,
    link?: boolean,
    justIcon?: boolean,
    className?: string,
    // use this to pass the classes props from Material-UI
    muiClasses?: any
}

export default class RegularButton extends React.Component<RegularButtonProps> {
}
import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    classes?: any,
    className?: string,
    plain?: boolean,
    color?: "warning" | "success" | "danger" | "info" | "primary" | "rose"
    stats?: boolean,
    icon?: boolean
}

export default class CardHeader extends React.Component<CardProps> {
}
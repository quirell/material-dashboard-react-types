import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    classes?: any,
    className?: string,
    color?: "warning" | "success" | "danger" | "info" | "primary" | "rose"
}

export default class CardIcon extends React.Component<CardProps> {
}
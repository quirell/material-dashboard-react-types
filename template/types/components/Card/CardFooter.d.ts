import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    classes?: any,
    className?: string,
    plain?: boolean,
    profile?: boolean
    chart?: boolean,
    stats?: boolean,
}

export default class CardFooter extends React.Component<CardProps> {
}
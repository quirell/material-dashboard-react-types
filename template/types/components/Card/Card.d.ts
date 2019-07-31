import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    classes?: any,
    className?: string,
    plain?: boolean,
    profile?: boolean,
    chart?: boolean,
}

export default class Card extends React.Component<CardProps> {
}
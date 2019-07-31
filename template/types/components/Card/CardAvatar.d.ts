import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    classes?: any,
    className?: string,
    plain?: boolean,
    profile?: boolean
}

export default class CardAvatar extends React.Component<CardProps> {
}
import * as React from "react";

export interface FixedPluginProps {
    bgImage?: string,
    handleFixedClick?: () => void,
    fixedClasses?: string,
    bgColor?: "purple" | "blue" | "green" | "orange" | "red",
    handleColorClick?: (colorName: string) => void,
    handleImageClick?: (imageSrc: string) => void
}

export default class FixedPlugin extends React.Component<FixedPluginProps> {
}
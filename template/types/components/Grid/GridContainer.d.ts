import * as React from "react";
import {GridProps} from "@material-ui/core/Grid";

export interface GridContainerProps extends GridProps {
    classes?: any
}

export default class GridContainer extends React.Component<GridContainerProps> {
}
import * as React from "react";
import {GridProps} from "@material-ui/core/Grid";

export interface GridItemProps extends GridProps {
    classes?: any
}

export default class GridItem extends React.Component<GridItemProps> {
}
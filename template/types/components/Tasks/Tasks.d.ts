import * as React from "react";

export interface TasksProps {
    classes?: any,
    tasksIndexes?: number[],
    tasks?: React.ReactNode,
    checkedIndexes?: number[]
}

export default class Tasks extends React.Component<TasksProps> {

}
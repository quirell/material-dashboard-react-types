import * as React from "react";
import {FormControlProps} from "@material-ui/core/FormControl";
import {InputLabelProps} from "@material-ui/core/InputLabel";

export interface CustomInputProps {
    classes?: any,
    labelText?: React.ReactNode,
    labelProps?: InputLabelProps,
    id?: string,
    inputProps?: React.HTMLAttributes<HTMLInputElement>,
    formControlProps: FormControlProps,
    error?: boolean,
    success?: boolean
}

export default class CustomInput extends React.Component<CustomInputProps> {
}
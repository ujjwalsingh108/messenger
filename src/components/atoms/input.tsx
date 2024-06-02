import * as React from "react";
import { TextField, TextFieldProps } from "@mui/material";

export const Input = React.forwardRef<HTMLDivElement, TextFieldProps>(
  (props, ref) => {
    return <TextField ref={ref} {...props} />;
  }
);

Input.displayName = "Input";

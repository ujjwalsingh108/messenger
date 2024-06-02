import * as React from "react";
import { TextField, TextFieldProps, MenuItem } from "@mui/material";

interface Option {
  label: string;
  value: string | number | boolean;
}

type SelectProps = TextFieldProps & {
  options: Option[];
};

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ options, ...props }, ref) => {
    return (
      <TextField select ref={ref} {...props}>
        {options.map((option: any) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    );
  }
);

Select.displayName = "Select";

import * as React from "react";
import { Button, ButtonProps } from "@mui/material";

export const Btn = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <Button ref={ref} {...props}>
        {props.children}
      </Button>
    );
  }
);
Btn.displayName = "Btn";

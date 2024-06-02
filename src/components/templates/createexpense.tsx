import * as React from "react";

import Box from "@mui/material/Box";
import { Input, Btn, Select } from "@/components/atoms";

const booleanOptions = [
  { value: true, label: "True" },
  { value: false, label: "False" },
];

const CreateExpense = () => {
  return (
    <React.Fragment>
      <main className="flex min-h-screen p-8">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Input id="outlined-basic" label="Your Name" variant="outlined" />
          <Input id="outlined-basic" label="Amount Paid" variant="outlined" />
          <Input id="outlined-basic" label="Bank" variant="outlined" />
          <Select
            id="outlined-basic"
            label="Is Cash"
            variant="outlined"
            options={booleanOptions}
          />
          <Input id="outlined-basic" label="Credit Card" variant="outlined" />
          <Input id="outlined-basic" label="UPI ID" variant="outlined" />
          <Input id="outlined-basic" label="Spent Mode" variant="outlined" />
          <Input
            id="outlined-basic"
            label="Transaction Mode"
            variant="outlined"
          />
          <Input id="outlined-basic" label="Shop Name" variant="outlined" />
          <Input id="outlined-basic" label="Receiver Name" variant="outlined" />
          <Input
            id="outlined-basic"
            label="Transaction ID"
            variant="outlined"
          />
          <Input
            id="outlined-basic"
            label="Receiver UPI ID"
            variant="outlined"
          />
          <Input id="outlined-basic" label="Your ID" variant="outlined" />
          <Input
            id="outlined-multiline-static"
            label="Spend Description"
            fullWidth
            multiline
            rows={4}
            defaultValue="Some description about the transaction."
          />
          <Btn variant="outlined">Submit</Btn>
        </Box>
      </main>
    </React.Fragment>
  );
};
export default CreateExpense;

import * as React from "react";

import { Unstable_Grid2 as Grid, Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <React.Fragment>
      <Box sx={{ px: 4, py: 1 }}>
        <Grid container spacing={2} alignItems={"center"}>
          <Grid xs={12} md={2}>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Header Title
            </Typography>
          </Grid>
          <Grid md={10} container justifyContent={"space-between"}>
            <Grid container>
              <Grid>
                <Typography variant="body1">Left Content</Typography>
              </Grid>
              <Grid>
                <Typography variant="body1">Left Content</Typography>
              </Grid>
              <Grid>
                <Typography variant="body1">Left Content</Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid>
                <Typography variant="body1">Right Content</Typography>
              </Grid>
              <Grid>
                <Typography variant="body1">Right Content</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Header;

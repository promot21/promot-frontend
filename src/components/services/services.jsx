import React from "react";
import { Box, Grid } from "@mui/material";
import { InnerWrapper, OuterWrapper } from "../wrapper/wrapper";
import { Description, Title } from "./services.components";
import ServicesData from "./content";

function Services() {
  return (
    <OuterWrapper>
      <InnerWrapper sx={{ my: { xs: "50px", sm: "140px" } }}>
        <Grid
          container
          sx={{
            width: { xs: "90%", sm: "77%" },
            mx: "auto",
            justifyContent: "space-between",
          }}
        >
          {ServicesData.map((data, index) => {
            return (
              <Grid item sm={3.45}>
                <Box component="img" src={data.image} alt="" />
                <Title>{data.title}</Title>
                <Description>{data.description}</Description>
              </Grid>
            );
          })}
        </Grid>
      </InnerWrapper>
    </OuterWrapper>
  );
}

export default Services;

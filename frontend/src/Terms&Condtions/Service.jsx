import React from "react";
import { Grid, Paper } from "@mui/material";
import {
  LocalShipping,
 
} from "@mui/icons-material";



const Services = () => {
  return (
    <>
      <div className="servicess">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Paper
              elevation={3}
              style={{
                backgroundColor: "red",
                height: "auto",
                padding: "5px 0px 1px 5px",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <LocalShipping fontSize="large" />
              <div>
                <p style={{ fontSize: "15px" }}>Brand Warranty</p>
                <p style={{ fontSize: "12px" }}>On all prepaid orders</p>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              elevation={3}
              style={{
                backgroundColor: "red",
                height: "auto",

                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <LocalShipping fontSize="large" />

              <p style={{ fontSize: "15px" }}>Brand Warranty</p>
              <p style={{ fontSize: "12px" }}>On all prepaid orders</p>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              elevation={3}
              style={{
                backgroundColor: "red",
                height: "auto",

                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <LocalShipping fontSize="large" />

              <p style={{ fontSize: "15px" }}>Brand Warranty</p>
              <p style={{ fontSize: "12px" }}>On all prepaid orders</p>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              elevation={3}
              style={{
                backgroundColor: "red",
                height: "auto",

                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <LocalShipping fontSize="large" />

              <p style={{ fontSize: "15px" }}>Brand Warranty</p>
              <p style={{ fontSize: "12px" }}>On all prepaid orders</p>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default Services;

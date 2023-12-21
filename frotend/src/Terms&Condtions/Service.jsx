import React from "react";
import { Grid, Paper } from "@mui/material";
import {
  LocalShipping,
  Security,
  LocalOffer,
  CreditCard,
} from "@mui/icons-material";

// const useStyles = makeStyles((theme) => ({
//   Services_section: {
//     backgroundColor: "#003E90",
//     paddingTop: theme.spacing(0.5),
//     paddingBottom: theme.spacing(0.5),
//     fontFamily: "'Roboto', sans-serif",
//   },
//   Services_wrapper: {
//     display: "flex",
//     gap: "2.5rem",
//     width: "100%",
//     flexWrap: "wrap",
//     height: "auto",
//     paddingTop: "20px",
//     justifyContent: "center",
//   },
//   Services_card: {
//     display: "flex",
//     alignItems: "center",
//     backgroundColor: "#BAD7E9",
//     borderRadius: theme.spacing(1),
//     padding: theme.spacing(2),
//     marginLeft: "1rem",
//     marginBottom: theme.spacing(2),
//   },
//   Services_icon: {
//     color: "#FF2442",
//     fontSize: "3rem",
//     marginRight: theme.spacing(2.5),
//     "& svg": {
//       fontSize: "3rem !important",
//     },
//   },
//   Services_cardTitle: {
//     color: "#3A1078",
//     fontWeight: "bold",
//     fontSize: "1rem",
//   },
//   Services_cardInfo: {
//     color: "#3A1078A3",
//     fontWeight: 300,
//     fontSize: "0.8rem",
//   },
// }));

// const servicesData = [
//   {
//     id: 1,
//     icon: <LocalShipping fontSize="large" />,
//     title: "Express Delivery",
//     info: "Ships in 24 Hours",
//   },
//   {
//     id: 2,
//     icon: <Security fontSize="large" />,
//     title: "Brand Warranty",
//     info: "100% Original products",
//   },
//   {
//     id: 3,
//     icon: <LocalOffer fontSize="large" />,
//     title: "Exciting Deals",
//     info: "On all prepaid orders",
//   },
//   {
//     id: 4,
//     icon: <CreditCard fontSize="large" />,
//     title: "Secure Payments",
//     info: "SSL / Secure сertificate",
//   },
// ];

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

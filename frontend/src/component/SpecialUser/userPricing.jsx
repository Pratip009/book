import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import StripeCheckout from "react-stripe-checkout";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
const PricingList = styled("ul")({
  margin: 0,
  padding: 0,
  listStyle: "none",
  alignItems: "start",
});

const tiers = [
  {
    title: "Silver",
    subheader: "Basic",
    price: "299",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Buy Now",
    buttonVariant: "contained",
  },
  {
    title: "Gold",
    subheader: "Most popular",
    price: "499",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Buy Now",
    buttonVariant: "contained",
  },
  {
    title: "Diamond",
    subheader: "Premium",
    price: "699",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Buy Now",
    buttonVariant: "contained",
  },
];
export default function UserPricing() {
  const publishableKey =
    "pk_test_51NmagnSDp5aiQ0qo1BE2Jzs2J3Ode0BI7wqTV591wsq3Ov4DuiIg8kU1ZKrQ3GXzD5z7VQiUw7wCejNbr1XbYRUm00bnUsrOM4";
  const [product, setProduct] = useState({
    name: "Headphone",
    price: 5,
  });
  const priceForStripe = product.price * 100;
  const handleSuccess = () => {
    MySwal.fire({
      icon: "success",
      title: "Payment was successful",
      time: 4000,
    });
  };
  const handleFailure = () => {
    MySwal.fire({
      icon: "error",
      title: "Payment was not successful",
      time: 4000,
    });
  };
  const payNow = async (token) => {
    try {
      const response = await axios({
        url: "https://book-rxj9.onrender.com/payment",
        method: "post",
        data: {
          amount: product.price * 100,
          token,
        },
      });
      if (response.status === 200) {
        handleSuccess();
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };

  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={5} alignItems="flex-end">
        {tiers.map((tier) => (
          <Grid
            item
            key={product.name}
            xs={12}
            sm={product.name === "Enterprise" ? 12 : 6}
            md={4}
          >
            <Card>
              <CardHeader
                title={product.name}
                titleTypographyProps={{ align: "center" }}
                action={tier.title === "Pro" ? <StarIcon /> : null}
                subheaderTypographyProps={{
                  align: "center",
                  color: "whitesmoke",
                }}
                sx={{
                  backgroundColor: "#222831",
                  color: "white",
                }}
              />
              <CardContent sx={{ backgroundColor: "#393E46" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                  }}
                >
                  <Typography component="h2" variant="h3" color="white">
                    ₹{product.price}
                  </Typography>
                  <Typography variant="h6" color="white">
                    /mo
                  </Typography>
                </Box>
                <PricingList sx={{ color: "whitesmoke" }}>
                  {tier.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))}
                </PricingList>
              </CardContent>

              <CardActions sx={{ backgroundColor: "#00ADB5" }}>
                <StripeCheckout
                  stripeKey={publishableKey}
                  label="Pay Now"
                  name="Pay With Credit Card"
                  billingAddress
                  shippingAddress
                  amount={priceForStripe}
                  description={`Your total is $${product.price}`}
                  token={payNow}
                />
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

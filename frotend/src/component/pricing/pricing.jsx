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
import { useState } from "react";
import Modal from "@mui/material/Modal";

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
    price: "0",
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
    price: "15",
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
    price: "30",
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
export default function Pricing() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="md" component="main">
      <Grid container spacing={5} alignItems="flex-end">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === "Enterprise" ? 12 : 6}
            md={4}
          >
            <Card>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
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
                    ${tier.price}
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
                <Button
                  endDecorator={<KeyboardArrowRight />}
                  onClick={handleOpen}
                  sx={{
                    color: "black",
                  }}
                >
                  Buy now
                </Button>

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 400,
                      bgcolor: "white",
                      border: "2px solid #000",
                      boxShadow: 24,
                      p: 4,
                    }}
                  >
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Kindly call / whatsapp on 9007022228 , 8240554890 for
                      further details or email on info@learningneeds.in
                    </Typography>
                  </Box>
                </Modal>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

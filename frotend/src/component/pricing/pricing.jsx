import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { styled } from "@mui/system";
import CircleIcon from "@mui/icons-material/Circle";

const programs = [
  {
    category: "Learning Needs Soft Skills Program",
    items: [
      "LN Complete Soft",
      "LN Essential Edge",
      "LN Versa Skill Pro",
      "LN Customer Connect",
      "LN Lead Smart",
      "LN Heart and Skill",
      "LN Teach Well",
      "LN Sales Excellence",
    ],
  },
  {
    category: "Learning Needs School Service Model",
    items: [
      "Urban Edge",
      "Suburban Edge",
      "Rural Vista",
      "LN Start",
      "LN School Craft",
      "LN Vanguard",
      "LN Wave",
    ],
  },
  {
    category: "Learning Needs Book Box",
    items: [
      "Beginner Reader",
      "Right Start",
      "Reader Collection",
      "Enthusiastic Reader",
    ],
  },
];

const getCardBackgroundColor = (index) => {
  const colors = ["#ffebee", "#e3f2fd", "#e8f5e9"];
  return colors[index % colors.length];
};

const getHeadingBackgroundColor = (index) => {
  const colors = ["#ffcdd2", "#bbdefb", "#c8e6c9"];
  return colors[index % colors.length];
};

const StyledCard = styled(Card)(({ index }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: getCardBackgroundColor(index),
}));

const CardContentStyled = styled(CardContent)({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const HeadingSection = styled("div")(({ index }) => ({
  backgroundColor: getHeadingBackgroundColor(index),
  padding: "12px", // Adjusted padding
  borderBottom: "2px solid #000",
}));

const StyledHeadingTypography = styled(Typography)({
  fontFamily: "'Outfit', sans-serif",
  fontWeight: "bold",
  position: "relative",
  marginBottom: "0px",
});

const StyledTypography = styled(Typography)({
  fontFamily: "'Outfit', sans-serif",
  fontWeight: 400,
});

const ContactButton = styled(Button)({
  backgroundColor: "#055694",
  color: "#fff",
  marginTop: "12px", // Adjusted margin top
  "&:hover": {
    backgroundColor: "#cc3d00",
  },
});

const StyledDialogTitle = styled(DialogTitle)({
  fontFamily: "'Outfit', sans-serif",
  borderBottom: "2px solid #cc3d00", // Example of a bolder shade
});

const StyledDialogContent = styled(DialogContent)({
  fontFamily: "'Outfit', sans-serif",
});

const StyledDialogContentText = styled(DialogContentText)({
  fontFamily: "'Outfit', sans-serif",
});

const Pricing = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={3}>
        {programs.map((program, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard index={index}>
              <HeadingSection index={index}>
                <StyledHeadingTypography variant="h6">
                  {program.category}
                </StyledHeadingTypography>
              </HeadingSection>
              <CardContentStyled>
                <List>
                  {program.items.map((item, idx) => (
                    <ListItem key={idx} disableGutters>
                      <ListItemIcon>
                        <CircleIcon style={{ fontSize: 10 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={<StyledTypography style={{fontSize:20 ,fontWeight:'bold'}}>{item}</StyledTypography>}
                      />
                    </ListItem>
                  ))}
                </List>
                <ContactButton fullWidth onClick={handleClickOpen}>
                  Contact
                </ContactButton>
              </CardContentStyled>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleClose} maxWidth="sm">
        {" "}
        {/* Adjusted maxWidth */}
        <StyledDialogTitle>Contact Us</StyledDialogTitle>
        <StyledDialogContent>
          <StyledDialogContentText>
            For more information, please contact us at: 8240554890
          </StyledDialogContentText>
          <StyledDialogContentText>
            Email: info@learningneeds.in
          </StyledDialogContentText>
        </StyledDialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Pricing;

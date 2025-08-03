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

// Modern color palette
const getCardBackgroundColor = (index) => {
  const colors = ["#F9FAFB", "#F3F4F6", "#EFF6FF"];
  return colors[index % colors.length];
};

const getHeadingBackgroundColor = (index) => {
  const colors = ["#E0F2F1", "#FCE4EC", "#E3F2FD"];
  return colors[index % colors.length];
};

// Modern styled card
const StyledCard = styled(Card)(({ index }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  marginTop: "2rem",
  borderRadius: "20px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  backgroundColor: getCardBackgroundColor(index),
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
  },
}));

const CardContentStyled = styled(CardContent)({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "24px",
});

const HeadingSection = styled("div")(({ index }) => ({
  backgroundColor: getHeadingBackgroundColor(index),
  padding: "18px",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
}));

const StyledHeadingTypography = styled(Typography)({
  fontFamily: "Outfit, sans-serif",
  fontSize: "20px",
  fontWeight: 700,
  color: "#1F2937",
});

const StyledTypography = styled(Typography)({
  fontFamily: "Outfit, sans-serif",
  fontSize: "16px",
  color: "#374151",
});

const ContactButton = styled(Button)({
  backgroundColor: "#FF4E00",
  fontFamily: "Outfit, sans-serif",
  color: "#fff",
  marginTop: "20px",
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "12px",
  fontWeight: "bold",
  textTransform: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#cc3d00",
  },
});

const StyledDialogTitle = styled(DialogTitle)({
  fontFamily: "Outfit, sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  backgroundColor: "#f9fafb",
  borderBottom: "2px solid #ff4e00",
});

const StyledDialogContentText = styled(DialogContentText)({
  fontFamily: "Outfit, sans-serif",
  fontSize: "15px",
  color: "#374151",
  marginBottom: "10px",
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
      <Grid container spacing={4}>
        {programs.map((program, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard index={index}>
              <HeadingSection index={index}>
                <StyledHeadingTypography>
                  {program.category}
                </StyledHeadingTypography>
              </HeadingSection>
              <CardContentStyled>
                <List dense>
                  {program.items.map((item, idx) => (
                    <ListItem key={idx} disableGutters>
                      <ListItemIcon sx={{ minWidth: "30px" }}>
                        <CircleIcon sx={{ fontSize: 12, color: "#FF4E00" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={<StyledTypography>{item}</StyledTypography>}
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
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <StyledDialogTitle>Contact Us</StyledDialogTitle>
        <DialogContent>
          <StyledDialogContentText>
            📞 Phone: <strong>8240554890</strong>
          </StyledDialogContentText>
          <StyledDialogContentText>
            📧 Email: <strong>info@learningneeds.in</strong>
          </StyledDialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Pricing;

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import "./Training.css";
import { Grid } from "@material-ui/core";
import TabList from "./TabList";
import StarIcon from "@mui/icons-material/Star";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "react-bootstrap";
import Banner from "../Banner";
import mainImg from "../../Image/Product/trainingImg.png";
import pattern from "../../Image/Product/Frame 20.png";
import bookImg from "../../Image/home/teambook.png";
import star from "../../Image/home/teamstar.png";
import ProgramList from "./ProgramList";
import Challenges from "./Challenges";
const useStyles = makeStyles((theme) => ({
  imageContainer: {
    width: "100%",
    height: "400px",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      height: "200px", // Adjust height for small screens
    },
    [theme.breakpoints.down("xs")]: {
      height: "150px", // Adjust height for extra small screens
    },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
}));
const Training = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const classes = useStyles();
  return (
    <container-fluid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <container-fluid>
            <Banner
              title="Delivering Positive Change"
              mainImage={mainImg}
              iconLeft={bookImg}
              backgroundPattern={pattern}
              iconRight={star}
            />
          </container-fluid>
        </Grid>
        <Grid item xs={12}>
          <Container
            style={{
              width: "100%",
              maxWidth: "1440px",
              margin: "0 auto",
            }}
          >
            <Container
              className="training_header"
              style={{
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              <p>
                Soft skills’ Behavioural Shift training is essential because we
                do not have it in our academic curricula.
                <br />
                However it can be developed through continuous training.
              </p>

              <p>
                Our skill based training programs are designed to encourage
                ‘awareness’ in one’s behavioural patterns. Learning Needs
                international quality Training & Development Programs are
                designed to help today’s aspiring professionals to succeed in an
                ever increasing competitive and diverse business environment.
              </p>
            </Container>

            <ProgramList />

            <container-fluid>
              <Challenges />
            </container-fluid>
            <div style={{
              display:'flex',
              alignItems:'center',
              justifyContent:'center'
            }}>
              <h1 className="about_head">Our Strength</h1>
            </div>
            <div>
              <TabList />
            </div>

            <div className="training_head">
              <h1 className="about_head">Way we deliver our session</h1>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "2rem",
              }}
            >
              <img src={require("../../Image/sssa1233.png")} alt="" />
            </div>
          </Container>
        </Grid>
      </Grid>

      {/* <MetaData title={"Training"} /> */}
    </container-fluid>
  );
};

export default Training;

import React, { useEffect, Suspense } from "react";
import "aos/dist/aos.css";
import "./Training.css";
import { Grid } from "@material-ui/core";
import TabList from "./TabList";
import { Container } from "react-bootstrap";
import Banner from "../Banner";
import mainImg from "../../Image/Product/trainingImg.png";
import pattern from "../../Image/Product/Frame 20.png";
import bookImg from "../../Image/home/teambook.png";
import star from "../../Image/home/teamstar.png";

import Challenges from "./Challenges";
import HeaderWithUnderline from "../UnderLineAnimation/HeaderWithUnderline";

const Training = () => {
  const ProgramList = React.lazy(() => import("./ProgramList"));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                padding: 0,
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              <p className="">
                Soft skills’ Behavioural Shift training is essential because we
                do not have it in our academic curricula.
                <br />
                However it can be developed through continuous training.
              </p>

              <p className="">
                Our skill based training programs are designed to encourage
                ‘awareness’ in one’s behavioural patterns. Learning Needs
                international quality Training & Development Programs are
                designed to help today’s aspiring professionals to succeed in an
                ever increasing competitive and diverse business environment.
              </p>
            </Container>
            <Container
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <ProgramList />
              </Suspense>
            </Container>
            <container-fluid>
              <Challenges />
            </container-fluid>

            <HeaderWithUnderline
              sentence="Our Strength"
              highlightedWord="Strength"
            />
            <div>
              <TabList />
            </div>

            <HeaderWithUnderline
              sentence="Way we deliver our session"
              highlightedWord="our session"
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "2rem",
              }}
            >
              <img
                src={require("../../Image/sssa1233.png")}
                alt=""
                loading="lazy"
              />
            </div>
          </Container>
        </Grid>
      </Grid>

      {/* <MetaData title={"Training"} /> */}
    </container-fluid>
  );
};

export default Training;

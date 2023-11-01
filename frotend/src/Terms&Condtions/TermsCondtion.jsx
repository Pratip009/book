import React from "react";
import "./TermsAndCondtion.css";
import MetaData from "../component/layouts/MataData/MataData";
import { Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Challenges from "./Challenges";
import AOS from "aos";
import "aos/dist/aos.css";
import VerifiedIcon from "@mui/icons-material/Verified";
// import TermsImage from "../Image/about/tc.jpg";
import QontoConnector from "./Stepper";
const TermsAndConditionsPage = () => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="terms-container">
      <MetaData title="Terms and Conditions" />
      <img
        src={require("../Image/courses.jpg")}
        alt="Terms and Conditions"
        className="terms-image"
      />
      <div className="terms-overlay">
        <h1 className="terms-title">TRAINING</h1>
      </div>
      <div className="terms-content">
        <h2 className="headings">Training</h2>
        <p className="sub_headings1">
          "Soft skills’ Behavioural Shift training is essential because we do
          not have it in our academic curricula. However it can be developed
          through continuous training." Our skill based training programs are
          designed to encourage ‘awareness’ in one’s behavioural patterns.
          Learning Needs international quality Training & Development Programs
          are designed to help today’s aspiring professionals to succeed in an
          ever increasing competitive and diverse business environment.
        </p>
        <h2 className="headings"> List of Programs</h2>
        <span className="sub_headings">
          There are many different programs offered by Learning Needs that will
          enhance your career in a positive way
        </span>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ marginTop: "1rem" }}
        >
          <Grid item xs={3}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StarIcon fontSize="large" style={{ color: "#f58c00" }} />
              </Grid>
              <Grid item className="programm_name">
                Effective Communication
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StarIcon fontSize="large" style={{ color: "#f58c00" }} />
              </Grid>
              <Grid item className="programm_name">
                Success with Change
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StarIcon fontSize="large" style={{ color: "#f58c00" }} />
              </Grid>
              <Grid item className="programm_name">
                Anger Management
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StarIcon fontSize="large" style={{ color: "#f58c00" }} />
              </Grid>
              <Grid item className="programm_name">
                Assertiveness in Action
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        &nbsp;
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StarIcon fontSize="large" style={{ color: "#f58c00" }} />
              </Grid>
              <Grid item className="programm_name">
                Peak Performance
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StarIcon fontSize="large" style={{ color: "#f58c00" }} />
              </Grid>
              <Grid item className="programm_name">
                Complaint Handling
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StarIcon fontSize="large" style={{ color: "#f58c00" }} />
              </Grid>
              <Grid item className="programm_name">
                Dealing with Difficult Situations
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StarIcon fontSize="large" style={{ color: "#f58c00" }} />
              </Grid>
              <Grid item className="programm_name">
                Listening Skills
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        &nbsp;
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StarIcon fontSize="large" style={{ color: "#f58c00" }} />
              </Grid>
              <Grid item className="programm_name">
                Leadership Innovation
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StarIcon fontSize="large" style={{ color: "#f58c00" }} />
              </Grid>
              <Grid item className="programm_name">
                Questioning Skills
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StarIcon fontSize="large" style={{ color: "#f58c00" }} />
              </Grid>
              <Grid item className="programm_name">
                Presentation Skills
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StarIcon fontSize="large" style={{ color: "#f58c00" }} />
              </Grid>
              <Grid item className="programm_name">
                Team Building
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        &nbsp;
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StarIcon fontSize="large" style={{ color: "#f58c00" }} />
              </Grid>
              <Grid item className="programm_name">
                Multipurpose Theme
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StarIcon fontSize="large" style={{ color: "#f58c00" }} />
              </Grid>
              <Grid item className="programm_name">
                Public Speaking
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StarIcon fontSize="large" style={{ color: "#f58c00" }} />
              </Grid>
              <Grid item className="programm_name">
                Time Management
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StarIcon fontSize="large" style={{ color: "#f58c00" }} />
              </Grid>
              <Grid item className="programm_name">
                Effective Meetings
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        &nbsp;
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StarIcon fontSize="large" style={{ color: "#f58c00" }} />
              </Grid>
              <Grid item className="programm_name">
                Power of Influence
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StarIcon fontSize="large" style={{ color: "#f58c00" }} />
              </Grid>
              <Grid item className="programm_name">
                Customer Service Excellence
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StarIcon fontSize="large" style={{ color: "#f58c00" }} />
              </Grid>
              <Grid item className="programm_name">
                Multipurpose Theme
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <StarIcon fontSize="large" style={{ color: "#f58c00" }} />
              </Grid>
              <Grid item className="programm_name">
                Think Your Way to Success
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Challenges />
        </div>
        <div style={{ marginTop: "3rem" }}>
          <QontoConnector />
        </div>
        <h2 className="headings">Our Strengths</h2>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ margin: 0 }}
        >
          <Grid item xs={12} md={6}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <VerifiedIcon fontSize="large" style={{ color: "#02a1e5" }} />
              </Grid>
              &nbsp;
              <Grid item className="programm_name1">
                Our trainers are experts in their domain, with vast experience
                in training .
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <VerifiedIcon fontSize="large" style={{ color: "#02a1e5" }} />
              </Grid>
              &nbsp;
              <Grid item className="programm_name1">
                You get tried and tested plus innovation module and content
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ margin: 0 }}
        >
          <Grid item xs={12} md={6}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <VerifiedIcon fontSize="large" style={{ color: "#02a1e5" }} />
              </Grid>
              &nbsp;
              <Grid item className="programm_name1">
                You get tried and tested plus innovation module and content
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <VerifiedIcon fontSize="large" style={{ color: "#02a1e5" }} />
              </Grid>
              &nbsp;
              <Grid item className="programm_name1">
                All our learning is practical and real-world base
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ margin: 0 }}
        >
          <Grid item xs={12} md={6}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <VerifiedIcon fontSize="large" style={{ color: "#02a1e5" }} />
              </Grid>
              &nbsp;
              <Grid item className="programm_name1">
                We personalise and customize content and module according to
                need
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <VerifiedIcon fontSize="large" style={{ color: "#02a1e5" }} />
              </Grid>
              &nbsp;
              <Grid item className="programm_name1">
                We take the training hassle away from you
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ margin: 0 }}
        >
          <Grid item xs={12} md={6}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <VerifiedIcon fontSize="large" style={{ color: "#02a1e5" }} />
              </Grid>
              &nbsp;
              <Grid item className="programm_name1">
                We 100% guarantee you’ll be satisfied with our quality delivery
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <VerifiedIcon fontSize="large" style={{ color: "#02a1e5" }} />
              </Grid>
              &nbsp;
              <Grid item className="programm_name1">
                We offer training and workshop on an international scale
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;

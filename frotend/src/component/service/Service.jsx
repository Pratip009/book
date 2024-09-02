import React from "react";
import AOS from "aos";
import { Grid } from "@material-ui/core";
import "aos/dist/aos.css";
import Pricing from "../pricing/pricing";
import "./Service.css";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "react-bootstrap";
const useStyles = makeStyles((theme) => ({
  imageContainer: {
    marginTop: "110px",
    width: "100%",
    height: "300px",
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
    objectPosition: "center"
  },
}));
const Service = () => {


  return (
    <container-fluid>
      <container-fluid>
        <img
          src={require("../../Image/trA011.png")}
          alt="About"
          className="responsive-img"
        />
      </container-fluid>

     
      
        <Container className="servicebg">
          <div className="circle_text">
            <h1
              style={{
                textAlign: "start",
                fontSize: "36px",
                marginTop: "20px",
              }}
            >
              <span className="highlight">Services of Learning Needs</span>
              
            </h1>
          </div>
          <p
            style={{
              fontSize: {xs:"15px",md:"36px"},
              fontWeight: "600",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            {" "}
            Our services help you succeed in business
          </p>

          <p
            style={{
              fontFamily: "'Outfit', sans-serif",
              textAlign: "justify",
              display: "inline-block",
              fontSize: "17px",
            }}
          >
            Learning Needs actively works with various reliable preferred
            associates from different walks of life. This exercise ensures
            durable, timely and quality supply of school needs at reasonable
            price. Vendor management includes activities such as selecting the
            right partners, negotiating contracts, controlling costs, reducing
            vendor-related risks and ensuring smooth service delivery. We
            provide the school consultancy services needed to streamline and
            systematize various tasks, from period accounting to complex and
            sensitive whole-school projects, guidance on the best software
            solutions for your administration or a project manager to lead a
            school’s digital transformation. The Learning Needs team has worked
            with hundreds of schools, and we have a deep respect for how ethos
            and values impact the day-to-day operations within a school. We
            understand that there are many moving parts, roles, and
            responsibilities to running a successful school operation. If you
            feel like you’ve gotten off track, why not trust the experts to help
            you get back on the road to success?
          </p>
        </Container>

        <Container style={{ marginTop: "3rem" }}>
          {/* <Price /> */}
          <img src={require("../../Image/servicessss.png")} alt="" />
        </Container>
        <Container>
          <h1
            style={{
              textAlign: "start",
              fontSize: "36px",
              marginTop: "20px",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            <span className="highlight">
              Learning Needs Core Serve Solutions
            </span>
          </h1>
          <Pricing />
        </Container>
     

    
    </container-fluid>
  );
};

export default Service;

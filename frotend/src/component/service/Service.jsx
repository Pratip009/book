import React from "react";
import AOS from "aos";
import { Grid } from "@material-ui/core";
import "aos/dist/aos.css";
import Pricing from "../pricing/pricing";
const Service = () => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      style={{ width: "100%", backgroundColor: "white", overflowX: "hidden" }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <div style={{ marginTop: "7rem" }}>
            <img
              src={require("../../Image/breadcrumbnew/Service.jpg")}
              alt=""
            />
          </div>
        </Grid>

        {/* <Grid item xs={12}></Grid> */}
        <div className="container___">
          <div className="circle_text">
            <p className="non_important" style={{ textAlign: "Start" }}>
              {" "}
              <span class="circle-sketch-highlight">Services</span> of Learning
              Needs
            </p>
          </div>
          <p
            style={{
              fontSize: "23px",
              fontWeight: "600",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            {" "}
            Our services help you succeed in business
          </p>
          <p
            style={{
              fontFamily: "'Roboto', sans-serif",
              textAlign: "justify",
              display: "inline-block",
            }}
          >
            We have designed our Training & Development Program to help today’s
            aspiring professional succeed in and increasingly competitive,
            increasingly diverse business environment.
          </p>

          <span
            style={{
              fontFamily: "'Roboto', sans-serif",
              textAlign: "justify",
              display: "inline-block",
            }}
          >
            We are very much committed to the success of our clients and their
            individual
          </span>
          <h3
            style={{
              fontSize: "23px",
              fontWeight: "600",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            About Learning Needs
          </h3>
          <p
            style={{
              fontFamily: "'Roboto', sans-serif",
              textAlign: "justify",
              display: "inline-block",
            }}
          >
            Learning Needs is a training & management consulting company based
            in Kolkata in the lap of nature beside river Ganges, India. Learning
            Needs offers a variety of boutique services, tailored to each
            clients need. Our specialized expertise allows the Individual,
            Institution, Schools and Organizations to achieve their objectives;
            we are very much committed to the success of our clients and their
            individual.
          </p>
          <p
            style={{
              fontFamily: "'Roboto', sans-serif",
              textAlign: "justify",
              display: "inline-block",
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
          <p
            style={{
              fontSize: "23px",
              fontWeight: "600",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            About our future target
          </p>
          <p
            style={{
              fontFamily: "'Roboto', sans-serif",
              textAlign: "justify",
              display: "inline-block",
            }}
          >
            Our future target is to provide training, information, resources,
            support and guidance for a variety of groups including: school
            owners, businessman, young people who are at or have recently left
            school, adults looking to expand their skills, educators, employers,
            and parents.
          </p>
          <div style={{ marginTop: "3rem" }}>
            {/* <Price /> */}
            <img src={require("../../Image/servicessss.png")} alt="" />
          </div>
         <div>
          <h1 style={{fontFamily: "'Roboto', sans-serif",fontSize:"23px"}}>Our Pricing</h1>
         <Pricing />
         </div>
        </div>
      </Grid>
      {/* <MetaData title={"Service"} /> */}
    </div>
  );
};

export default Service;

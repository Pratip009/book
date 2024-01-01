import React from "react";
import AOS from "aos";
import { Grid } from "@material-ui/core";
import "aos/dist/aos.css";
import Pricing from "../pricing/pricing";
import "./Service.css"
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
          <div className="servicebg">

          <div className="circle_text">
            
            <h1
             style={{
               textAlign: "start",
               fontSize: "36px",
               marginTop: "20px",
             }}
           >
             <span className="highlight">Services </span>
             of Learning
             Needs
           </h1>
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
             fontSize:"17px"
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
          </div>
         
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

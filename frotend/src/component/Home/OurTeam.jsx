import "./OurTeam.css";
import Member1 from "../../Image/team001.png";
import Member2 from "../../Image/team002.png";
import Member3 from "../../Image/m2.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
export default function OurTeam() {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="model1">
      <div className="members">
        <div className="member" data-aos="fade-down">
          <img width={300} height={300} src={Member1} alt="ceo" />
          <div className="description">
            <h1 style={{ fontFamily: "'Roboto', sans-serif" }}>
              Mr. Rahul Singh{" "}
            </h1>
            <h2>C.E.O./ Founder</h2>
            <br/><br/><br/>
            <div className="social-media">
              <InstagramIcon />
              <LinkedInIcon />
              <PinterestIcon />
            </div>
          </div>
        </div>
        <div className="member" data-aos="fade-down">
          <img width={300} src={Member2} alt="vc" />
          <div className="description">
            <h1>Namrata Pahuja</h1>
            <h2>Academic Head</h2>
            <br/><br/><br/>
            <div className="social-media">
              <InstagramIcon />
              <LinkedInIcon />
              <PinterestIcon />
            </div>
          </div>
        </div>
        <div className="member" data-aos="fade-down">
          <img width={300} src={Member3} alt="writter" />
          <div className="description">
            <h1>Mr. XYZ </h1>
            <h2>Vice President</h2>
            <br/><br/><br/>
            <div className="social-media">
              <InstagramIcon />
              <LinkedInIcon />
              <PinterestIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

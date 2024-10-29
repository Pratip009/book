import React from "react";
import aboutImg from "../../Image/home/about.png";
import carClipArt from "../../Image/home/car.png"; // Car clip art image
import globeClipArt from "../../Image/home/globe.png"; // Globe clip art image
import { MdOutlineCheckCircle } from "react-icons/md";
import callIcon from "../../Image/home/Background.png"; // Phone icon image
import underlineImg from "../../Image/home/underline.png"; // Underline image path

const AboutUsSection = () => {
  return (
    <div style={styles.container}>
      {/* Background Clip Art */}
      <img src={carClipArt} alt="Car Clip Art" style={styles.carClipArt} />
      <img
        src={globeClipArt}
        alt="Globe Clip Art"
        style={styles.globeClipArt}
      />

      {/* Background Boxes */}
      <div style={styles.backgroundBoxOne}></div>
      <div style={styles.backgroundBoxTwo}></div>

      {/* Main Content Section */}
      <div style={styles.imageSection}>
        <img src={aboutImg} alt="Team working together" style={styles.image} />
      </div>

      <div style={styles.textSection}>
        <h3 style={styles.subheading}>About Us</h3>
        <h2 style={styles.heading}>
          Our Services Help You Succeed in Business
        </h2>

        {/* Underline Image */}
        <img
          src={underlineImg} // Path to your underline image
          alt="Underline"
          style={styles.underline}
        />

        {/* Features List */}
        <div style={styles.features}>
          {[
            "Sports Training",
            "Easy To Learn",
            "Expert Teachers",
            "Management",
          ].map((feature, index) => (
            <div key={index} style={styles.featureItem}>
              <span style={styles.checkMark}>
                <MdOutlineCheckCircle />
              </span>
              {feature}
            </div>
          ))}
        </div>

        {/* Explore More Button and Contact Info */}
        <div style={styles.actionSection}>
          <button style={styles.button}>Explore More →</button>

          <div style={styles.contactInfo}>
            <img src={callIcon} alt="Phone Icon" style={styles.phoneIcon} />
            <div>
              <p style={styles.call}>Call Us Now</p>
              <p style={styles.phoneNumber}>+208-555-0112</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "666px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    overflow: "hidden",
  },
  // Background boxes
  backgroundBoxOne: {
    position: "absolute",
    top: "84px",
    left: "520px",
    width: "145px",
    height: "155px",
    backgroundColor: "#E0D6FC",
    borderRadius: "10px",
    zIndex: 1,
  },
  backgroundBoxTwo: {
    position: "absolute",
    left: "51px",
    top: "441px",
    width: "182px",
    height: "161px",
    backgroundColor: "#FEE4DD",
    borderRadius: "10px",
    zIndex: 1,
  },
  imageSection: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    zIndex: 2,
  },
  image: {
    width: "541px",
    height: "395px",
    borderRadius: "10px",
    objectFit: "cover",
  },
  textSection: {
    flex: 1,
    padding: "20px",
    zIndex: 2,
  },
  subheading: {
    color: "#FF4E00",
    fontFamily: "Quicksand",
    fontSize: "20px",
    lineHeight: "30px",
    marginBottom: "10px",
  },
  heading: {
    width: "641px",
    position: "relative",
    color: "#003E90",
    fontFamily: "Quicksand",
    fontSize: "60px",
    fontWeight: "700",
    lineHeight: "60px",
  },
  underline: {
    position: "absolute",
    width: "239px",
    height: "12px",
    top: "300px",
    left: "1095px",
    borderRadius: "45px",
    zIndex: "-1",
  },
  call: {
    fontFamily: "Quicksand",
    fontSize: "14px",
    lineHeight: "28px",
    fontWeight: "600",
    color: "#313131",
    margin: 0,
  },
  features: {
    width: "75%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  featureItem: {
    width: "242.27px",
    height: "48px",
    background: "#FFFFFF00",
    padding: "10px",
    borderRadius: "30px",
    boxShadow: "0px 4px 25px 0px #0000000F",
    display: "flex",
    alignItems: "center",
    fontSize: "20px",
    fontWeight: "600",
    fontFamily: "Quicksand",
    color: "#313131",
  },
  checkMark: {
    color: "#313131",
    fontSize: "25px",
    marginRight: "10px",
  },
  button: {
    width: "201.38px",
    height: "61px",
    borderRadius: "22px",
    backgroundColor: "#FF4E00",
    fontFamily: "Quicksand",
    color: "#ffffff",
    fontSize: "18px",
    lineHeight: "16px",
    border: "none",
    cursor: "pointer",
  },
  contactInfo: {
    display: "flex",
    alignItems: "center",
  },
  phoneIcon: {
    fontSize: "24px",
    color: "#FF6B6B",
    marginRight: "10px",
  },
  phoneNumber: {
    fontFamily: "Quicksand",
    fontSize: "18px",
    lineHeight: "21.6px",
    fontWeight: "600",
    color: "#313131",
  },
  // Clip art styles
  carClipArt: {
    position: "absolute",
    top: "20px",
    left: "20px",
    width: "91px",
    height: "66px",
    opacity: "1",
  },
  globeClipArt: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    width: "121px",
    height: "98px",
    opacity: "1",
  },
  // Responsive Styles
  actionSection: {
    display: "flex",
    alignItems: "center",
    gap: "50px",
  },
};

// Media Queries for Responsiveness
const mediaQueries = {
  '@media (max-width: 768px)': {
    container: {
      height: 'auto',
      flexDirection: 'column',
    },
    image: {
      width: '100%',
      height: 'auto',
    },
    heading: {
      fontSize: '40px',
      lineHeight: '50px',
      width: '100%',
    },
    subheading: {
      fontSize: '18px',
    },
    featureItem: {
      fontSize: '18px',
    },
    button: {
      width: '100%',
      fontSize: '16px',
    },
    phoneNumber: {
      fontSize: '16px',
    },
    underline: {
      width: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  },
  '@media (max-width: 480px)': {
    backgroundBoxOne: {
      width: '100px',
      height: '100px',
    },
    backgroundBoxTwo: {
      width: '150px',
      height: '120px',
    },
    subheading: {
      fontSize: '16px',
    },
    heading: {
      fontSize: '30px',
      lineHeight: '40px',
      width: '90%',
    },
    features: {
      gridTemplateColumns: '1fr',
    },
    featureItem: {
      fontSize: '16px',
    },
    button: {
      height: '50px',
      fontSize: '14px',
    },
    contactInfo: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    phoneIcon: {
      fontSize: '20px',
    },
    phoneNumber: {
      fontSize: '14px',
    },
  },
};

export default AboutUsSection;

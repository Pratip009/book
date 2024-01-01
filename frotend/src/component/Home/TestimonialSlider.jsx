import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialSlider.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const TestimonialSlider = () => {
  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <CardOne img="https://e0.pxfuel.com/wallpapers/289/267/desktop-wallpaper-tirolzinho-cute-cartoon-cartoon-cute-cartoon-boy-cute-cartoon-boys.jpg" />
          <CardTwo img="https://cdn.pixabay.com/photo/2023/04/06/05/33/cute-boy-cartoon-7902892_1280.jpg" />
          <CardThree img="https://us.123rf.com/450wm/aberrantrealities/aberrantrealities2309/aberrantrealities230925384/213543610-a-cartoon-girl-with-brown-hair-and-a-yellow-bow-in-her-hair.jpg?ver=6" />
        </Slider>
      </div>
    </div>
  );
};

const CardOne = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "grey",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid #FF4E00",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p
        style={{
          fontSize: "15px",
          fontFamily: "'Roboto', sans-serif",

          display: "inline-block",
        }}
      >
        Having natural conversations on social media about your work is
        authentic and adds another layer of credibility to your company. The
        main difference between these and other testimonials is that the other
        types are usually requested, whereas social recommendations are mostly
        spontaneous.
      </p>
      <p
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "600",
          marginTop: 25,
        }}
      >
        <span style={{ fontWeight: 500, color: "green" }}>ABC</span> , CTO of
        BVN Company
      </p>
    </div>
  );
};
const CardTwo = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid #FF4E00",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p
        style={{
          fontSize: "15px",
          fontFamily: "'Roboto', sans-serif",

          display: "inline-block",
        }}
      >
        Having natural conversations on social media about your work is
        authentic and adds another layer of credibility to your company. The
        main difference between these and other testimonials is that the other
        types are usually requested, whereas social recommendations are mostly
        spontaneous.
      </p>
      <p
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "600",
          marginTop: 25,
        }}
      >
        <span style={{ fontWeight: 500, color: "green" }}>PQR</span> , CEO of
        XYZ Company
      </p>
    </div>
  );
};
const CardThree = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid #FF4E00",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p
        style={{
          fontSize: "15px",
          fontFamily: "'Roboto', sans-serif",

          display: "inline-block",
        }}
      >
        Having natural conversations on social media about your work is
        authentic and adds another layer of credibility to your company. The
        main difference between these and other testimonials is that the other
        types are usually requested, whereas social recommendations are mostly
        spontaneous.
      </p>
      <p
        style={{
          marginTop: 25,
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "600",
        }}
      >
        <span
          style={{
            fontWeight: 500,
            color: "green",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          XYZ
        </span>{" "}
        , Media Analyst
      </p>
    </div>
  );
};
export default TestimonialSlider;

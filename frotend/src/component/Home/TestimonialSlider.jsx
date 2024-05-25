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
      <div style={{ width: "85%", textAlign: "center" }}>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <CardOne img={require("../../Image/testimonial1.jpg")} />
          <CardTwo img={require("../../Image/testimonial2.jpg")} />
          <CardThree img={require("../../Image/testimonial3.jpg")} />
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
        Learning Needs is indeed true to its name when it comes to service. It
        is indeed the best program on teachers training which I have come
        across. Mr.Rahul is a thorough professional who creates tailor made
        sessions according to the client's need. This was a very interactive
        workshop compared to those available from other providers which feel
        more like lectures. The day really fine-tuned my skills and the updates
        I have received since mean I can continue my learning into the future.
        Maharishi Vidya Mandir school has been immensely benefitted by the
        training program. The performance of the teachers has also shown
        remarkable difference after the training session.
      </p>
      <p
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "600",
          marginTop: 25,
        }}
      >
        <span style={{ fontWeight: 500, color: "green" }}>
          Neha Aswin B.ED, M.A (In American and Indian Literature), MBA.
        </span>{" "}
        Principal, Maharishi Vidya Mandir Senior Secondary School, Jolarpettai
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
        I recently completed the teacher training program and I must say it was
        a truly transformative Experience. The Program provided me with a deeper
        understanding of Effective Teaching practices. I gained a wealth of
        Knowledge and Skills that I can apply in my classroom. It was
        particularly helpful as it allowed me to explore new approaches and
        strategies that I can use to engage and motivate my students. I really
        wanted to thank Mr.RAHUL ,a best educator who guided and educated me all
        through the teacher training program.
      </p>
      <p
        style={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: "600",
          marginTop: 25,
        }}
      >
        <span style={{ fontWeight: 500, color: "green" }}>
          S.Swathika. BBA.,MBA
        </span>{" "}
        , Coordinator Primary Wing Maharishi Vidya Mandir.Pudur, Jolarpettai
        Tirupattur dt.
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
        I recently attended the teacher training program, and I was thoroughly
        impressed with the training session led by Learning Needs. The Teacher
        Training program was engaging, informative, and demonstrated exceptional
        knowledge and expertise in the field, and their passion for teaching was
        truly remarkable. The session was packed with valuable resources,
        including practical tips, templates, and tools that I can apply
        immediately. I appreciated the emphasis on technology integration,
        project-based learning, and how it can enhance student engagement and
        learning outcomes. The training session made me inspired, motivated, and
        equipped with new ideas to transform my teaching practice and make a
        positive impact on their students learning experiences.
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
          M.Sudhakar BE.,B.Ed
        </span>{" "}
        , HOD Computer Science of Maharishi Vidya Mandir School. Anna Street,
        Jolarpettai, Tirupattur District.
      </p>
    </div>
  );
};
export default TestimonialSlider;

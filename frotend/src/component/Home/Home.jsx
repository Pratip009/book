import React, { useState, useEffect } from "react";
import "./Home.css";
import MataData from "../layouts/MataData/MataData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layouts/loader/Loader";
import { useAlert } from "react-alert";
import HeroSlider from "./HeroSilder";
import AOS from "aos";
import List from "@mui/material/List";
import OfferBanner from "./OfferBanner";
import TeamMessage from "./TeamMessage";
import TeamMessage1 from "./TeamMessage1";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HailIcon from "@mui/icons-material/Hail";
import axios from "axios";
import { baseURL } from "../utils/constant";
import Welcome from "./Welcome";
import Programs from "./Programs";
import useMediaQuery from "@mui/material/useMediaQuery";
import Wellcome2 from "./Wellcome2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutUsSection from "./AboutUsSection";
import "./Home.css";
import ProductSection from "./ProductSection";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import MissionAndVision from "./MissionAndVision";

function Home() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [notices, setNotices] = useState([]);
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  const [task, setTask] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchNotices = async () => {
      try {
        const response = await fetch(
          "https://learningneeds-strapi-11ta.onrender.com/api/noticeboards"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Notices API response:", data);
        setNotices(data.data); // Extract `data` array from response
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, []);

  React.useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors);
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res) => {
      console.log(res.data);
      setTask(res.data);
    });
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MataData title="Learning Needs" />
          <div className="Home_Page" style={{ overflow: "hidden" }}>
            <HeroSlider />
            <OfferBanner />
            <AboutUsSection />
            <Programs />
            <ProductSection products={products} />
            <TeamMessage1 />
            <MissionAndVision />
          </div>
        </>
      )}
    </>
  );
}

export default Home;

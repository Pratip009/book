import React, { useState, useEffect } from "react";
import "./Home.css";
import MataData from "../layouts/MataData/MataData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layouts/loader/Loader";
import { useAlert } from "react-alert";
import HeroSlider from "./HeroSilder";
import AOS from "aos";
import OfferBanner from "./OfferBanner";
import TeamMessage1 from "./TeamMessage1";
import AboutUsSection from "./AboutUsSection";
import Programs from "./Programs";
import ProductSection from "./ProductSection";
import "aos/dist/aos.css";
import MissionAndVision from "./MissionAndVision";

function Home() {
  const [notices, setNotices] = useState([]);
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading: productsLoading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchNotices = async () => {
      try {
        const response = await fetch("https://learningneeds-strapi-11ta.onrender.com/api/noticeboards");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Notices API response:", data);
        setNotices(data.data);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };

    fetchNotices();
  }, []);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <MataData title="Learning Needs" />
      <div className="Home_Page" style={{ overflow: "hidden" }}>
        <HeroSlider />
        <OfferBanner />
        <AboutUsSection />
        <Programs />

      
        {productsLoading ? (
          <Loader />
        ) : (
          <ProductSection products={products} />
        )}

        <TeamMessage1 />
        <MissionAndVision />
      </div>
    </>
  );
}

export default Home;

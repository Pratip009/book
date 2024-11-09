import React, { useState, useEffect, Suspense, lazy } from "react";
import "./Home.css";
import MataData from "../layouts/MataData/MataData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layouts/loader/Loader";
import { useAlert } from "react-alert";
import AOS from "aos";
import "aos/dist/aos.css";

// Lazy load non-essential components
const HeroSlider = lazy(() => import("./HeroSilder"));
const OfferBanner = lazy(() => import("./OfferBanner"));
const AboutUsSection = lazy(() => import("./AboutUsSection"));
const Programs = lazy(() => import("./Programs"));
const ProductSection = lazy(() => import("./ProductSection"));
const TeamMessage1 = lazy(() => import("./TeamMessage1"));
const MissionAndVision = lazy(() => import("./MissionAndVision"));

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
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </div>
    </>
  );
}

export default Home;

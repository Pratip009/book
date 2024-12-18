import React, { useState, useEffect, Suspense, lazy } from "react";
import "./Home.css";
import MataData from "../layouts/MataData/MataData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layouts/loader/Loader";
import { useAlert } from "react-alert";
import Wellcome from "./Wellcome";


// Lazy load non-essential components
const HeroSlider = lazy(() => import("./HeroSilder"));
const OfferBanner = lazy(() => import("./OfferBanner"));
const AboutUsSection = lazy(() => import("./AboutUsSection"));
const Programs = lazy(() => import("./Programs"));
const ProductSection = lazy(() => import("./ProductSection"));
const TeamMessage = lazy(() => import("./TeamMessage1"));
const MissionAndVision = lazy(() => import("./MissionAndVision"));

const Home = () => {
  const [notices, setNotices] = useState([]);
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading: productsLoading, error, products } = useSelector((state) => state.products);

  // Fetch Notices
  const fetchNotices = async () => {
    try {
      const response = await fetch("https://learningneeds-strapi-11ta.onrender.com/api/noticeboards");
      if (!response.ok) throw new Error("Failed to fetch notices.");
      const data = await response.json();
      setNotices(data.data);
    } catch (error) {
      console.error("Error fetching notices:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchNotices();
  }, []);

  // Handle Redux product errors and fetch products
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  // Initialize AOS animations

  return (
    <>
      <MataData title="Learning Needs" />
      <main className="Home_Page">
        <Suspense fallback={<Loader />}>
          <HeroSlider />
          <OfferBanner />
          <Wellcome/>
          <AboutUsSection />
          <Programs />
          {productsLoading ? (
            <Loader />
          ) : (
            <ProductSection products={products} />
          )}
          <TeamMessage />
          <MissionAndVision />
        </Suspense>
      </main>
    </>
  );
};

export default Home;

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
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility
  const alert = useAlert();
  const dispatch = useDispatch();
  const {
    loading: productsLoading,
    error,
    products,
  } = useSelector((state) => state.products);

  // Fetch Notices
  const fetchNotices = async () => {
    try {
      const response = await fetch(
        "https://book-rxj9.onrender.com/api/v1/noticeboards"
      );
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

  // Show popup after the page has fully loaded
  useEffect(() => {
    const handlePageLoad = () => {
      setShowPopup(true);
    };
    window.addEventListener("load", handlePageLoad);

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  return (
    <>
      <MataData title="Learning Needs" />
      <main className="Home_Page">
        {/* Popup Alert */}
        {showPopup && (
          <div className="popup">
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              ✖
            </button>
            <p>
              <strong>We are updating!</strong>
            </p>
            <p>
              Our website is undergoing some improvements to serve you better.
              During this time, you might experience minor changes.
            </p>
            <p>Thank you for your patience and understanding!</p>
          </div>
        )}

        <Suspense fallback={<Loader />}>
          <HeroSlider />
          <OfferBanner />
          <Wellcome />
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

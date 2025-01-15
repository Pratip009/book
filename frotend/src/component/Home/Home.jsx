import React, { useState, useEffect, Suspense, lazy } from "react";
import "./Home.css";
import MataData from "../layouts/MataData/MataData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layouts/loader/Loader";
import { useAlert } from "react-alert";
import Wellcome from "./Wellcome";
import construction from "../../Image/home/cons.jpg";
// Bootstrap modal
import { Modal } from "react-bootstrap"; // Import Modal from react-bootstrap

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
  const [modalVisible, setModalVisible] = useState(true); // Modal visibility state
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
        "https://learningneeds-strapi-11ta.onrender.com/api/noticeboards"
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

  return (
    <>
      <MataData title="Learning Needs" />
      <main className="Home_Page">
        {/* Bootstrap Modal for "Website Under Construction" */}
        <Modal
          show={modalVisible}
          onHide={() => setModalVisible(false)}
          centered
          style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
          }}
        >
          <Modal.Body>
            <div className="text-center">
              <img
                src="https://media.istockphoto.com/id/1171943134/vector/building-under-construction-flat-illustration.jpg?s=612x612&w=0&k=20&c=ZdmcPBWmbMT45fVofLiNziYtQRcPMKL5GVahNHGwNGE=" // You can replace this with your own image
                alt="Under Construction"
                className="modal-image"
              />
              <h2
                style={{
                  fontFamily: "Nunito",
                }}
              >
                Website Under Construction
              </h2>
              <p
                style={{
                  fontFamily: "Nunito",
                }}
              >
                We're working hard to bring you an amazing experience. Stay
                tuned!
              </p>
              <button
                className=""
                onClick={() => setModalVisible(false)}
                style={{
                  background: "#ff4e00",
                  color: "white",
                  padding: "7px 10px",
                  border: "none",
                  fontFamily: "Nunito",
                  borderRadius: "10px",
                }}
              >
                Close
              </button>
            </div>
          </Modal.Body>
        </Modal>

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

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { IconButton, Input } from "@material-ui/core";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import {
  generateDiscountedPrice,
  calculateDiscount,
  dispalyMoney,
} from "../DisplayMoney/DisplayMoney";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Rating from "@material-ui/lab/Rating";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import useActive from "../hook/useActive";
import ReviewCard from "./ReviewCard";
import { clearErrors, getProductDetails } from "../../actions/productAction";
import { useAlert } from "react-alert";
import MetaData from "../layouts/MataData/MataData";
import { addItemToCart } from "../../actions/cartAction";
import CricketBallLoader from "../layouts/loader/Loader";
import Button from "@mui/material/Button";
import { PRODUCT_DETAILS_RESET } from "../../constants/productsConstatns";

// Import the default image for pdf products
import pdfDefaultImage from "../../Image/pdfplaceholder.png"; // Default image for pdf products

const ProductDetails = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const alert = useAlert();

  const [quantity, setQuantity] = useState(1);
  const [previewImg, setPreviewImg] = useState("");
  const { handleActive, activeClass } = useActive(0);

  const { product, loading, error, success } = useSelector(
    (state) => state.productDetails
  );
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [match.params.id]);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      const initialImage =
        product.category === "pdf"
          ? pdfDefaultImage
          : product.images[0]?.url || "";
      setPreviewImg(initialImage);
      handleActive(0);
      dispatch({ type: PRODUCT_DETAILS_RESET });
    }
    dispatch(getProductDetails(match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, error, alert, success, match.params.id]);

  // handling Add-to-cart
  const handleAddItem = () => {
    dispatch(addItemToCart(match.params.id, quantity));
    alert.success("Item Added To Cart");
  };

  // handling Preview image
  const handlePreviewImg = (images, i) => {
    const selectedImage =
      images[i]?.url || (product.category === "pdf" ? pdfDefaultImage : "");
    setPreviewImg(selectedImage);
    handleActive(i);
  };

  function increaseQuantityHandler() {
    if (product.Stock <= quantity) {
      return;
    }
    setQuantity((prev) => prev + 1);
  }

  function deceraseQuantityHandler() {
    if (quantity <= 1) {
      return;
    }
    setQuantity((prev) => prev - 1);
  }

  // calculating Prices
  const finalPrice = generateDiscountedPrice(product.price);
  const discountedPrice = product.price - finalPrice;
  const newPrice = dispalyMoney(finalPrice);
  const oldPrice = dispalyMoney(product.price);
  const savedPrice = dispalyMoney(discountedPrice);
  const savedDiscount = calculateDiscount(discountedPrice, product.price);

  return (
    <>
      {loading ? (
        <CricketBallLoader />
      ) : (
        <>
          <div style={{ fontFamily: "Nunito, sans-serif", color: "#333" }}>
            <MetaData title={product.name} />
            <section
              style={{ padding: "40px 20px", maxWidth: 1200, margin: "auto" }}
            >
              <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
                {/* Image Gallery */}
                <div style={{ flex: "1 1 300px" }}>
                  <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                    {product.images?.map((img, i) => (
                      <div
                        key={i}
                        onClick={() => handlePreviewImg(product.images, i)}
                        style={{
                          width: 70,
                          height: 70,
                          overflow: "hidden",
                          borderRadius: 8,
                          border:
                            previewImg === (img.url || pdfDefaultImage)
                              ? "2px solid #FF4E00"
                              : "2px solid transparent",
                          cursor: "pointer",
                          transition: "border 0.2s",
                        }}
                      >
                        <img
                          src={img.url || pdfDefaultImage}
                          alt="thumb"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div
                    style={{
                      border: "1px solid #ddd",
                      borderRadius: 8,
                      padding: 10,
                      textAlign: "center",
                      maxHeight: 400,
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={previewImg || pdfDefaultImage}
                      alt="product"
                      style={{
                        maxWidth: "100%",
                        maxHeight: 380,
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div style={{ flex: "1 1 400px" }}>
                  <h1
                    style={{ fontSize: 32, fontWeight: 700, marginBottom: 10 }}
                  >
                    {product.name}
                  </h1>
                  <p style={{ fontSize: 16, color: "#555", marginBottom: 20 }}>
                    {product.info}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 20,
                    }}
                  >
                    <Rating
                      value={product.ratings}
                      precision={0.5}
                      readOnly
                      size="medium"
                    />
                    <span style={{ fontSize: 14, color: "#666" }}>
                      ({product.numOfReviews} Reviews)
                    </span>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <span
                      style={{ fontSize: 28, fontWeight: 700, color: "#111" }}
                    >
                      {newPrice}
                    </span>
                    <span
                      style={{
                        fontSize: 18,
                        color: "#999",
                        textDecoration: "line-through",
                        marginLeft: 10,
                      }}
                    >
                      {oldPrice}
                    </span>
                    <div
                      style={{
                        marginTop: 8,
                        color: "#38A169",
                        fontWeight: 600,
                      }}
                    >
                      You save {savedPrice} ({savedDiscount}%)
                    </div>
                    <div style={{ fontSize: 12, color: "#999" }}>
                      (Inclusive of all taxes)
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor:
                        product.Stock > 0 ? "#E6FFFA" : "#FFE6E6",
                      color: product.Stock > 0 ? "#2F855A" : "#C53030",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "6px 12px",
                      borderRadius: 4,
                      fontWeight: 600,
                      marginBottom: 20,
                    }}
                  >
                    {product.Stock > 0 ? <DoneIcon /> : <CloseIcon />}
                    {product.Stock > 0 ? "In Stock" : "Out of Stock"}
                  </div>

                  <p style={{ marginBottom: 30, lineHeight: 1.6 }}>
                    {product.description}
                  </p>

                  <div style={{ marginBottom: 20 }}>
                    <LocalShippingOutlinedIcon
                      style={{ verticalAlign: "middle", marginRight: 8 }}
                    />
                    We deliver! Just say when and how.
                  </div>

                  <div
                    style={{ display: "flex", alignItems: "center", gap: 16 }}
                  >
                    <IconButton
                      onClick={deceraseQuantityHandler}
                      disabled={quantity <= 1}
                      style={{
                        border: "1px solid #ccc",
                        padding: 8,
                        color: quantity <= 1 ? "#ccc" : "#333",
                      }}
                    >
                      <RemoveIcon />
                    </IconButton>

                    <Input
                      value={quantity}
                      inputProps={{
                        readOnly: true,
                        style: { textAlign: "center" },
                      }}
                      style={{
                        width: 50,
                        fontSize: 16,
                        border: "1px solid #ddd",
                        borderRadius: 4,
                        padding: 4,
                      }}
                    />

                    <IconButton
                      onClick={increaseQuantityHandler}
                      disabled={product.Stock <= quantity}
                      style={{
                        border: "1px solid #ccc",
                        padding: 8,
                        color: product.Stock <= quantity ? "#ccc" : "#333",
                      }}
                    >
                      <AddIcon />
                    </IconButton>

                    <Button
                      variant="contained"
                      onClick={handleAddItem}
                      disabled={product.Stock <= 0}
                      style={{
                        marginLeft: "auto",
                        backgroundColor: "#FF4E00",
                        color: "#fff",
                        padding: "12px 24px",
                        textTransform: "none",
                        fontWeight: 600,
                      }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <div style={{ maxWidth: 1200, margin: "40px auto" }}>
              <ReviewCard product={product} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;

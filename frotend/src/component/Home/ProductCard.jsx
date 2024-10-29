import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import { Rating, Typography, Button } from "@mui/material";
import { addItemToCart } from "../../actions/cartAction";
import placeholderImage from "../../Image/home/pdfIcon.png";
import {
  dispalyMoney,
  generateDiscountedPrice,
} from "../DisplayMoney/DisplayMoney";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

function ProductCard({ product }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const dispatch = useDispatch();

  if (!product) {
    return (
      <MDBCard className="product-card">
        <MDBCardBody className="d-flex flex-column">
          <h5 className="card-title">Loading...</h5>
          <MDBCardImage
            src={placeholderImage}
            alt="Placeholder"
            fluid
            className="card-img-top"
          />
          <p>Product details loading...</p>
        </MDBCardBody>
      </MDBCard>
    );
  }

  const imageUrl =
    product.category === "PDF" && product.pdfs[0] && product.pdfs[0].image_url
      ? product.pdfs[0].image_url
      : product.images && product.images[0] && product.images[0].url
      ? product.images[0].url
      : placeholderImage;

  let discountPrice = generateDiscountedPrice(product.price);
  discountPrice = dispalyMoney(discountPrice);

  const truncatedTitle = product.name.split(" ").slice(0, 2).join(" ");

  const addToCartHandler = (id, qty) => {
    dispatch(addItemToCart(id, qty));
  };

  return (
    <MDBCard className="product-card position-relative">
      <Link
        className="productCard"
        to={`/product/${product._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <MDBCard
          style={{
            width: "255px",
            height: "129px",
            borderTopLeftRadius: "6px",
            borderTopRightRadius: "6px",
            backgroundColor: "#ECF4FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            border: "none",
          }}
        >
          <MDBCardImage
            src={imageUrl}
            fluid
            className="card-img-top"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </MDBCard>

        <MDBCardBody
          className="d-flex flex-column body"
          style={{ padding: 0, alignItems: "flex-start" }}
        >
          {/* Discount Price */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginBottom: "8px",
              marginTop: "8px",
            }}
          >
            <span className="discount-price" style={{ margin: 0 }}>
              {discountPrice}
            </span>
          </div>

          {/* Product Name */}
          <a href={`/product/${product._id}`} className="text-reset">
            <h5 className="card-title mb-1" style={{ margin: 0 }}>
              {truncatedTitle}
            </h5>
          </a>

          {/* Product Description */}

          {/* Rating Section */}
          <div className="d-flex align-items-center mb-2" style={{ margin: 0 }}>
            <Rating
              name="rating"
              value={product.ratings}
              precision={0.1}
              readOnly
              size="small"
              style={{
                color: "#ED6C1CFF",
                marginRight: 8,
                fontWeight: "400",
              }}
            />
            <Typography
              variant="body2"
              color="textSecondary"
              style={{ margin: 0 }}
            >
              ({product.numOfReviews})
            </Typography>
          </div>

          {/* Buy Now Button */}
          <Button
            className="product_btn"
            onClick={() => addToCartHandler(product._id, 1)}
            style={{
              display: "flex", // Use flexbox for alignment
              alignItems: "center", // Center items vertically
              justifyContent: "center", // Center items horizontally
              padding: "8px 12px", // Add some padding
              borderRadius: "12px", // Match your CSS
              border: "1px solid #000", // Match your CSS
               // Background color
              color: "#313131", // Text color
              fontWeight: "700", // Bold text
              cursor: "pointer", // Pointer cursor on hover
              transition: "background-color 0.3s", // Smooth background color change
              textTransform: "capitalize",
              marginTop:'1rem'
            }}
          >
            Buy Now
            <FaArrowRightLong style={{ marginLeft: "5px" }} />{" "}
            {/* Arrow icon */}
          </Button>
        </MDBCardBody>
      </Link>
    </MDBCard>
  );
}

export default ProductCard;

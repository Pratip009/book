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
        <MDBCard className="Product_Inner_Card">
          <MDBCardImage src={imageUrl} fluid className="card-img-top" />
        </MDBCard>

        <MDBCardBody
          className="d-flex flex-column body"
          style={{ padding: '0 15px', alignItems: "flex-start" }}
        >
          {/* Discount Price */}
          <div>
            <span className="discount-price">
              {discountPrice}
            </span>
          </div>

          {/* Product Name */}
          <a href={`/product/${product._id}`} className="text-reset">
            <h5 className="card-title mb-1">
              {truncatedTitle}
            </h5>
          </a>

          {/* Product Description */}

          {/* Rating Section */}
          <div className="d-flex align-items-center mb-2">
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
            className="product_btnn"
            onClick={() => addToCartHandler(product._id, 1)}
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

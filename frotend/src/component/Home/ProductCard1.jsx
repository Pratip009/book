import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";
import { Rating, Typography } from "@mui/material";
import { addItemToCart } from "../../actions/cartAction";
import placeholderImage from "../../Image/pdf.png";
import { dispalyMoney, generateDiscountedPrice } from "../DisplayMoney/DisplayMoney";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const dispatch = useDispatch();

  if (!product) {
    return (
      <MDBCard className="product-card">
        <MDBCardBody className="d-flex flex-column align-items-center">
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

  const discountPrice = dispalyMoney(generateDiscountedPrice(product.price));
  const oldPrice = dispalyMoney(product.price);

  const truncatedDescription = product.description
    ? product.description.split(" ").slice(0, 10).join(" ") + "..."
    : "No description available";

  const addToCartHandler = (id, qty) => {
    dispatch(addItemToCart(id, qty));
  };

  return (
    <MDBCard className="product-card position-relative" data-aos="fade-up">
      <Link to={`/product/${product._id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <MDBCardImage
          src={imageUrl}
          fluid
          className="product-image"
          style={{
            width: "100%",
            maxHeight: "150px",
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
        <FaShoppingCart
          className="icon-cart"
          onClick={(e) => {
            e.preventDefault();
            addToCartHandler(product._id, 1);
          }}
        />
        <MDBCardBody className="product-card-body">
          <h5 className="product-title mb-1">{product.name}</h5>
          <p className="product-description mb-2">{truncatedDescription}</p>
          <div className="rating-section d-flex align-items-center mb-2">
            <Rating name="rating" value={product.ratings} precision={0.1} readOnly size="small" />
            <Typography variant="body2" color="textSecondary" className="ml-2">
              ({product.numOfReviews})
            </Typography>
          </div>
          <div className="price-section mb-3">
            <span className="old-price">{oldPrice}</span>
            <span className="discount-price">{discountPrice}</span>
          </div>
          <button className="buy-now-btn">Buy Now →</button>
        </MDBCardBody>
      </Link>
    </MDBCard>
  );
}

export default ProductCard;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Rating, Typography } from "@mui/material";
import { addItemToCart } from "../../actions/cartAction";
import placeholderImage from "../../Image/pdf.png";
import {
  dispalyMoney,
  generateDiscountedPrice,
} from "../DisplayMoney/DisplayMoney";
import "./ProductCard.css";
import { FaShoppingCart } from "react-icons/fa"; // FontAwesome shopping cart icon

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
  const oldPrice = dispalyMoney(product.price);

  const truncatedDescription =
    product.description.split(" ").slice(0, 6).join(" ") + "...";

  const addToCartHandler = (id, qty) => {
    dispatch(addItemToCart(id, qty));
  };

  return (
    <MDBCard className="product-card position-relative"> {/* Added position-relative to parent card */}
      <MDBCardImage
        src={imageUrl}
        fluid
        className="card-img-top"
        style={{
          width: "100%",
          maxHeight: "150px",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
      {/* Cart Icon on the top-right corner of the image */}
      <FaShoppingCart
        className="icon-cart"
        onClick={() => addToCartHandler(product._id, 1)}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: '#ff4e00',
          fontSize: "35px",
          cursor: "pointer",
          color: "#FFFFFFFF",
          background: "#fff",
          padding: "8px",
          borderRadius: "50%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      />
      <MDBCardBody className="d-flex flex-column body">
        <a href={`/product/${product._id}`} className="text-reset">
          <h5 className="card-title mb-1">{product.name}</h5>
        </a>
        <p className="d-flex align-items-center mb-1">{truncatedDescription}</p>
        <div className="d-flex align-items-center mb-2">
          <Rating
            name="rating"
            value={product.ratings}
            precision={0.1}
            readOnly
            size="small"
            style={{
              color: "#ed1c24",
              marginRight: 8,
              fontWeight: "400",
            }}
          />
          <Typography variant="body2" color="textSecondary">
            ({product.numOfReviews})
          </Typography>
        </div>
        {/* Display the truncated description here */}
        <div className="price-section">
          <span className="old-price">{oldPrice}</span>
          <span className="discount-price">{discountPrice}</span>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}

export default ProductCard;

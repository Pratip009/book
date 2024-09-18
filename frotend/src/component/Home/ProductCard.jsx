import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
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
    <MDBCard className="product-card">
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image rounded hover-zoom"
      >
        <MDBCardImage
          src={imageUrl}
          fluid
          className="card-img-top"
          style={{
            width: "100%",          /* Full width */
            maxHeight:"200px",          /* Auto height to maintain aspect ratio */
            objectFit: "contain",    /* Ensure the entire image is visible */
            objectPosition: "center",/* Center the image within its container */
          }}
        />
        <a href={`/product/${product._id}`}>
          <div className="mask">
            <div className="d-flex justify-content-start align-items-end h-100">
              <h5>
                <span className="badge bg-primary ms-2">New</span>
                {product.isEco && (
                  <span className="badge bg-success ms-2">Eco</span>
                )}
                {product.discount > 0 && (
                  <span className="badge bg-danger ms-2">
                    -{product.discount}%
                  </span>
                )}
              </h5>
            </div>
          </div>
        </a>
      </MDBRipple>
      <MDBCardBody className="d-flex flex-column">
        <a href={`/product/${product._id}`} className="text-reset">
          <h5 className="card-title mb-1">{product.name}</h5>
        </a>
        {/* Rating and Reviews Section */}
        <div className="d-flex align-items-center mb-1">
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
        <p>{truncatedDescription}</p>{" "}
        {/* Display the truncated description here */}
        <div className="price-section mb-1">
          <span className="old-price">{oldPrice}</span>
          <span className="discount-price">{discountPrice}</span>
        </div>
        <div className="mt-1">
          <button
            className="btn btn-primary"
            onClick={() => addToCartHandler(product._id, 1)}
            style={{display:"flex" , alignItems:"center",justifyContent:"space-between"}}
          >
            <FaShoppingCart className="icon" /> Add to Cart
          </button>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}

export default ProductCard;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import {
  dispalyMoney,
  generateDiscountedPrice,
} from "../DisplayMoney/DisplayMoney";
import { addItemToCart } from "../../actions/cartAction";
import { useDispatch } from "react-redux";

// Placeholder image import
import placeholderImage from "../../Image/pdf.svg";
// Exclusive icon import
import exclusiveIcon from "../../Image/stars.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    height: "fit-content",
    margin: theme.spacing(2),
    backgroundColor: "#ffffff",
    border: "1px solid #E3E3E3",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s, box-shadow 0.3s, border 0.3s",
    position: "relative",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow:
        "0 8px 16px rgba(0, 62, 144, 0.4), 0 8px 16px rgba(255, 78, 0, 0.4)",
    },
  },
  media: {
    height: 200,
    width: "100%",
    objectFit: "cover",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
  },
  button: {
    marginTop: -10,
    backgroundColor: "#007BFF",
    color: "white",
    transition: "background-color 0.3s",
    borderRadius: "0 0 12px 12px",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: "bold",
    width: "100%",
    height: 45,
    "&:hover": {
      backgroundColor: "#0056b3",
    },
  },
  oldPrice: {
    textDecoration: "line-through",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: "normal",
    borderRadius: "5px",
    padding: "0 8px",
    fontSize: "1rem",
    backgroundColor: "#ff4e00",
    color: "#fff",
    marginRight: theme.spacing(1),
  },
  finalPrice: {
    color: "#fff",
    backgroundColor: "#28a745",
    fontFamily: "'Outfit', sans-serif",
    borderRadius: "5px",
    padding: "0 8px",
    fontWeight: "normal",
    fontSize: "1rem",
  },
  description: {
    fontSize: "0.9rem",
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 500,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
  },
  exclusiveIcon: {
    position: "absolute",
    top: "8px",
    left: "8px",
    width: "50px",
    height: "50px",
    backgroundImage: `url(${exclusiveIcon})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: 1,
  },
}));

const ProductCard = ({ product }) => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const dispatch = useDispatch();
  const classes = useStyles();

  if (!product) {
    return (
      <Card className={classes.root} elevation={6}>
        <CardContent>
          <Typography variant="body1">Loading...</Typography>
          <CardMedia
            className={classes.media}
            image={placeholderImage}
            title="Placeholder"
          />
          <CardContent>
            <Typography variant="body2">Product details loading...</Typography>
          </CardContent>
        </CardContent>
      </Card>
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

  const truncated =
    product.description.split(" ").slice(0, 6).join(" ") + "...";
  const nameTruncated = product.name.split(" ").slice(0, 6).join(" ") + "...";

  const addTocartHandler = (id, qty) => {
    dispatch(addItemToCart(id, qty));
  };

  return (
    <Card className={classes.root} elevation={6}>
      <div className={classes.exclusiveIcon} />
      <Link
        className="productCard"
        to={`/product/${product._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imageUrl}
            title={product.name}
          />
          <CardContent>
            <Typography
              gutterBottom
              color="black"
              fontWeight="bold"
              style={{
                fontWeight: "700",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              {nameTruncated}
            </Typography>

            <Typography
              variant="body2"
              color="textSecondary"
              component="div"
              className={classes.description}
            >
              {truncated}
            </Typography>
            <Box display="flex" alignItems="center">
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
            </Box>

            <Box display="flex" alignItems="center" marginTop="1rem">
              <Typography variant="body1" className={classes.oldPrice}>
                {oldPrice}
              </Typography>
              <Typography variant="body1" className={classes.finalPrice}>
                {discountPrice}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Link>
      <Box display="flex" justifyContent="center" p={1}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={() => addTocartHandler(product._id, 1)}
        >
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;

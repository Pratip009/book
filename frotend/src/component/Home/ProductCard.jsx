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
import placeholderImage from "../../Image/pdf.svg"; // Replace with your placeholder image path

const useStyles = makeStyles((theme) => ({
  root: {
    width: "280px",
    height: "fit-content",
    margin: theme.spacing(4),
    backgroundColor: "white",
    border: "1px solid grey",
    cursor: "pointer",
    boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.4)",
    "&:hover": {
      boxShadow: "-1px 10px 29px 0px #003E90",
    },
  },
  media: {
    height: 200,
    width: "100%",
    objectFit: "cover",
  },
  button: {
    marginTop: -15,
    background: "linear-gradient(90deg, #3f51b5, transparent) #2196f3;",
    color: "white",
    transition: "background-color 1s",
    borderRadius: 0,
    fontWeight: "bold",
    width: "100%",
    height: 45,
    "&:hover": {
      backgroundColor: "#FF4E00",
      color: "white",
      fontWeight: "bold",
    },
  },
  oldPrice: {
    textDecoration: "line-through",
    fontWeight: "normal",
    borderRadius: "5px",
    padding: "0 8px",
    fontSize: "1rem",
    background: "linear-gradient(90deg, #ed1c24, transparent) #9D0006;",
    color: "#fff",
    marginRight: theme.spacing(17),
  },
  finalPrice: {
    color: "#fff",
    background: "linear-gradient(90deg, #03C988, transparent) #008F2D;",
    borderRadius: "5px",
    padding: "0 8px",
    fontWeight: "normal",
    fontSize: "1rem",
  },
  description: {
    fontSize: "0.9rem",
    fontFamily: "'Outfit' sans-serif",
    fontWeight: 500,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: "-webkit-box",
    overflow: "hidden",
    textOverflow: "ellipsis",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
  },
}));

const ProductCard = ({ product }) => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const dispatch = useDispatch();
  const classes = useStyles();

  // Conditional check to handle loading state or undefined product
  if (!product) {
    // Render a placeholder UI or loading state
    return (
      <Card className={classes.root} elevation={6}>
        <CardContent>
          <Typography variant="body1">Loading...</Typography>
          {/* Placeholder UI */}
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
    product.description.split(" ").slice(0, 5).join(" ") + "...";
  const nameTruncated = product.name.split(" ").slice(0, 4).join(" ") + "...";

  const addTocartHandler = (id, qty) => {
    dispatch(addItemToCart(id, qty));
  };

  return (
    <Card className={classes.root} elevation={6}>
      <Link
        className="productCard"
        to={`/product/${product._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardActionArea>
          <CardMedia className={classes.media} image={imageUrl} title={product.name} />
          <CardContent>
            <Typography
              gutterBottom
              color="black"
              fontWeight="bold"
              style={{
                fontWeight: "700",
                fontFamily: "'Outfit' sans-serif",
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

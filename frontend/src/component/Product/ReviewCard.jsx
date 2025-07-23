import React, { useState, lazy, Suspense } from "react";
import {
  Typography,
  Grid,
  Select,
  MenuItem,
  Button,
  Box,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import CricketBallLoader from "../layouts/loader/Loader";
import { useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MyCard from "./Card";

const DialogBox = lazy(() => import("./DialogBox"));

const useStyles = makeStyles((theme) => ({
  reviewRoot: {
    padding: "32px",
    background: "#fafafa",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    marginTop: "3rem",
  },
  reviewHeader: {
    fontWeight: 700,
    marginBottom: "1rem",
    fontFamily: "'Nunito', sans-serif",
    fontSize: "24px",
  },
  submitBtn: {
    backgroundColor: "#FF4E00",
    color: "#fff",
    fontWeight: 600,
    marginBottom: "1.5rem",
    "&:hover": {
      backgroundColor: "#e04400",
    },
  },
  ratingContainer: {
    marginRight: "8px",
  },
  star: {
    fontSize: "20px",
    color: "#f59e0b",
  },
  ratingNumber: {
    margin: "0 10px",
    fontWeight: 500,
  },
  sortBy: {
    marginRight: "8px",
    fontWeight: 500,
    fontSize: "13px",
  },
  selectContainer: {
    margin: "1rem 0",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  select: {
    fontSize: "14px",
    padding: "6px 12px",
    borderRadius: "6px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    minWidth: "150px",
    fontWeight: 500,
  },
  menuItem: {
    fontSize: "14px",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1rem",
    marginTop: "1.5rem",
  },
}));

const ReviewCard = ({ product }) => {
  const classes = useStyles();
  const { isAuthenticated } = useSelector((state) => state.userData);
  const alert = useAlert();
  const history = useHistory();

  const [sortValue, setSortValue] = useState("highest");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    if (!isAuthenticated) {
      alert.error("Please Login to write a review");
      history.push("/login");
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => setOpen(false);

  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  };

  return (
    <div className={classes.reviewRoot}>
      <Typography variant="h5" className={classes.reviewHeader}>
        User Reviews
      </Typography>

      <Button
        variant="contained"
        className={classes.submitBtn}
        onClick={handleClickOpen}
      >
        Write a Review
      </Button>

      <Suspense fallback={<CricketBallLoader />}>
        <DialogBox open={open} handleClose={handleClose} />
      </Suspense>

      <Grid container alignItems="center" style={{ marginTop: "1.5rem" }}>
        <Rating
          value={product.ratings}
          precision={0.5}
          readOnly
          className={classes.star}
        />
        <Typography className={classes.ratingNumber}>
          {product.ratings} stars
        </Typography>
        <Typography variant="body2">
          <strong>Total Reviews:</strong> {product.numOfReviews}
        </Typography>
      </Grid>

      <Grid container className={classes.selectContainer}>
        <Typography className={classes.sortBy}>Sort By:</Typography>
        <Select
          value={sortValue}
          onChange={handleSortChange}
          className={classes.select}
        >
          <MenuItem value="highest" className={classes.menuItem}>
            Highest Rated
          </MenuItem>
          <MenuItem value="lowest" className={classes.menuItem}>
            Lowest Rated
          </MenuItem>
          <MenuItem value="latest" className={classes.menuItem}>
            Latest Reviews
          </MenuItem>
          <MenuItem value="oldest" className={classes.menuItem}>
            Oldest Reviews
          </MenuItem>
        </Select>
      </Grid>

      <div className={classes.container}>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <MyCard key={index} review={review} />
          ))
        ) : (
          <Typography variant="body1" style={{ marginTop: "1rem" }}>
            No reviews yet. Be the first to review!
          </Typography>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;

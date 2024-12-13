import React, { useEffect } from "react";
import "./Products.css";
import "aos/dist/aos.css";
import pattern from "../../Image/Product/Frame 19.png";
import AOS from "aos";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layouts/loader/Loader";
import { useAlert } from "react-alert";
import { useRouteMatch } from "react-router-dom";
import MetaData from "../layouts/MataData/MataData";
import { clearErrors, getProduct } from "../../actions/productAction";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@mui/material/Slider";
import { Typography, Collapse } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import InventoryIcon from "@mui/icons-material/Inventory";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import "../../Terms&Condtions/Aboutus.css";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../Banner";
import mainImage from "../../Image/Product/productImg.png";
import bookImg from "../../Image/home/teambook.png";
import star from "../../Image/home/teamstar.png";
import { motion } from "framer-motion";
const planetIcon = require("../../Image/home/teamglobe.png");
const bookIcon = require("../../Image/home/teambook.png");
const starIcon = require("../../Image/home/teamstar.png");
const categories = ["Books", "PDF", "Learning Aid"];
const data = [
  [
    "Gain valuable knowledge",
    "Exercise your brain",
    "Improve your focus and concentration",
    "Improve your memory",
  ],
  [
    "Enjoy entertainment",
    "Improve your ability to empathize",
    "Improve your communication skills",
    "Mental Stimulation",
  ],
  [
    "Stronger Analytical Thinking Skills",
    "Improve your mental health",
    "Vocabulary Expansion",
    "Stress Reduction",
  ],
];

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const match = useRouteMatch();
  let keyword = match.params.keyword;
  const dispatch = useDispatch();
  const {
    products,
    loading,
    productsCount,
    error,
    resultPerPage,
    // filterdProductCount,
  } = useSelector((state) => state.products);
  const alert = useAlert();

  const [currentPage, setCurrentPage] = React.useState();
  const [price, setPrice] = React.useState([0, 1000]); // initial limit from min=0 to max=1000
  const [category, setCategory] = React.useState("");
  const [ratings, setRatings] = React.useState(0);
  const [selectedCategory, setSelectedCategory] = React.useState("");

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, keyword, currentPage, price, ratings, category]);
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const setCurrentPageNoHandler = (e) => {
    setCurrentPage(e); // e is the clicked page value
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  const handleCategoryChange = (category) => {
    setCategory(category);
    setSelectedCategory(category);
    // Perform any additional actions or filtering based on the selected category
  };

  const [selectedRating, setSelectedRating] = React.useState("all");

  const handleRatingChange = (event) => {
    setRatings(event.target.value);
    setSelectedRating(event.target.value);
    // Trigger filtering with the selected rating value or perform any other action
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="PRODUCTS --Ecart" />

          {products === undefined || products.length === 0 ? (
            <>
              <motion.div
                className="emptyCartContainer "
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ marginTop: "5rem", background: "white" }}
              >
                <InventoryIcon className="cartIcon" />

                <Typography variant="h5" component="h1" className="cartHeading">
                  Product Not Found
                </Typography>
                <Typography variant="body" className="cartText">
                  Nothin' to see here.
                </Typography>
                <Typography variant="body" className="cartText">
                  There is no product with this name
                </Typography>

                <Button
                  className="shopNowButton"
                  onClick={() => window.location.reload()}
                  style={{ width: "7rem" }}
                >
                  Refresh
                </Button>
              </motion.div>
            </>
          ) : (
            <>
              <container-fluid>
                <container-fluid>
                  <Banner
                    title="Make No Bad Choices,Choose Us"
                    mainImage={mainImage}
                    iconLeft={bookImg}
                    backgroundPattern={pattern}
                    iconRight={star}
                  />
                </container-fluid>
                <container fluid className="product_back_clipart">
                  <img
                    src={starIcon}
                    alt="Star Icon"
                    className="icon star-iconproduct"
                    loading="lazy"
                  />

                  <img
                    src={bookIcon}
                    alt="Book Icon"
                    className="icon book-icon"
                    loading="lazy"
                  />
                  <img
                    src={planetIcon}
                    alt="Planet Icon"
                    className="icon planet-icon"
                    loading="lazy"
                  />
                  <div className="productBack">
                    <Container>
                      <h1
                        className="about_head3"
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1, delay: 0.1 }}
                      >
                        Why book Reading is important
                      </h1>

                      <span
                        style={{
                          fontFamily: "Nunito",
                          textAlign: "justify",
                          display: "inline-block",
                          fontSize: "var(--font-span)",
                        }}
                      >
                        One of the great reasons that signify the importance of
                        book reading in our life is that books act as our best
                        friends. Friends are one of the most important parts of
                        our life. We can’t imagine our life without the
                        companionship of a good friend. Similarly, a book is
                        like a best friend that constantly inspires us to become
                        the best versions of ourselves. Books enrich our minds
                        with knowledge just like a good friend. We can learn a
                        lot from books and they can help us in overcoming our
                        failures as well as shape our minds.
                      </span>
                      <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <span
                          style={{
                            fontFamily: "Nunito",
                            textAlign: "justify",
                            display: "inline-block",
                            fontSize: "var(--font-span)",
                            marginTop: "2rem",
                          }}
                        >
                          A variety of tasks in daily life require reading and
                          understanding written instructions. If children do not
                          learn to read, they cannot read to learn. Children
                          should be encouraged to pick up a book they prefer.
                          Children may not have much reading time at school but
                          parents can encourage their children to pick up books
                          at home. Reading books helps in cognitive mental
                          stimulation and brain exercising, enhancing the
                          child’s imagination amongst many other benefits.
                        </span>

                        <div className="">
                          <h1
                            className="about_head3"
                            whileInView={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 1, delay: 0.1 }}
                          >
                            {" "}
                            Benefits of Reading Books
                          </h1>
                        </div>
                        <span className="about_paragraph5">
                          Here are a few good benefits of reading books. When
                          you read every day, you:
                        </span>

                        <Row>
                          {data.map((column, colIndex) => (
                            <Col key={colIndex} md={4} sm={6} xs={12}>
                              <List>
                                {column.map((text, index) => (
                                  <ListItem key={index}>
                                    <ListItemAvatar>
                                      <MenuBookIcon
                                        fontSize="large"
                                        style={{ color: "#FF4E00" }}
                                      />
                                    </ListItemAvatar>
                                    <ListItemText
                                      primary={
                                        <Typography
                                          variant="body2"
                                          style={{
                                            fontSize: "var(--font-span)",
                                            fontWeight: "400",
                                            textAlign: "justify",
                                            display: "inline-block",
                                            fontFamily: "Nunito",
                                          }}
                                        >
                                          {text}
                                        </Typography>
                                      }
                                    />
                                  </ListItem>
                                ))}
                              </List>
                            </Col>
                          ))}
                        </Row>
                      </Collapse>
                      <Button
                        style={{
                          width: "10%",
                          color: "#fff",
                          backgroundColor: "#FF4E00",
                          display: "flex",
                          fontSize: "var(--font-span)",
                          marginTop: "10px",
                        }}
                        variant="contained"
                        onClick={handleExpandClick}
                      >
                        {expanded ? "Read Less" : "Read More"}
                      </Button>
                    </Container>
                  </div>
                </container>

                <Container className="productPageTop">
                  <Row>
                    <Col md={3} sm={12} xs={12}>
                      {/* Price Filter */}
                      <div className="filter_divider"></div>
                      <div className="priceFilter">
                        <Typography
                          style={{
                            fontSize: "18px",
                            padding: "5px",
                            fontWeight: 700,
                            color: "#414141",
                          }}
                        >
                          Price
                        </Typography>
                        <div className="priceSlider">
                          <Slider
                            value={price}
                            onChange={priceHandler}
                            min={0}
                            max={1000}
                            step={100}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                          />
                        </div>
                        <Row className="priceSelectors">
                          <Col xs={5}>
                            <Select
                              value={price[0]}
                              onChange={(e) =>
                                setPrice([+e.target.value, price[1]])
                              }
                              IconComponent={ArrowDropDownIcon}
                              renderValue={(selected) =>
                                selected !== "" ? selected : "min"
                              }
                            >
                              <MenuItem value={100}>100</MenuItem>
                              <MenuItem value={200}>200</MenuItem>
                              <MenuItem value={300}>300</MenuItem>
                              <MenuItem value={400}>400</MenuItem>
                              <MenuItem value={500}>500</MenuItem>
                              <MenuItem value={600}>600</MenuItem>
                              <MenuItem value={700}>700</MenuItem>
                              <MenuItem value={800}>800</MenuItem>
                              <MenuItem value={900}>900</MenuItem>
                              <MenuItem value={1000}>1000</MenuItem>
                            </Select>
                          </Col>
                          <Col xs={2} className="text-center">
                            <span className="toText">to</span>
                          </Col>
                          <Col xs={5}>
                            <Select
                              value={price[1]}
                              onChange={(e) =>
                                setPrice([price[0], +e.target.value])
                              }
                              IconComponent={ArrowDropDownIcon}
                              renderValue={(selected) =>
                                selected !== "" ? selected : "max"
                              }
                            >
                              <MenuItem value={200}>200</MenuItem>
                              <MenuItem value={300}>300</MenuItem>
                              <MenuItem value={400}>400</MenuItem>
                              <MenuItem value={500}>500</MenuItem>
                              <MenuItem value={600}>600</MenuItem>
                              <MenuItem value={700}>700</MenuItem>
                              <MenuItem value={800}>800</MenuItem>
                              <MenuItem value={900}>900</MenuItem>
                              <MenuItem value={1000}>1000</MenuItem>
                            </Select>
                          </Col>
                        </Row>
                      </div>

                      <div className="filter_divider"></div>

                      {/* Categories Filter */}
                      <div className="categoriesFilter">
                        <Typography
                          style={{
                            fontSize: "18px",
                            padding: "10px",
                            fontWeight: 700,
                            color: "#414141",
                          }}
                        >
                          Categories
                        </Typography>
                        <ul className="categoryBox">
                          {categories.map((category, index) => (
                            <li key={index} className="category-item">
                              <label
                                htmlFor={`category-${index}`}
                                className="category-label"
                              >
                                <input
                                  type="checkbox"
                                  id={`category-${index}`}
                                  value={category}
                                  checked={category === selectedCategory}
                                  onChange={() =>
                                    handleCategoryChange(category)
                                  }
                                />
                                {category}
                              </label>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="filter_divider"></div>

                      {/* Ratings Filter */}
                      <div className="ratingsFilter">
                        <Typography
                          style={{
                            fontSize: "18px",
                            padding: "10px",
                            fontWeight: 700,
                            color: "#414141",
                          }}
                        >
                          Ratings Above
                        </Typography>
                        <RadioGroup
                          value={selectedRating}
                          onChange={handleRatingChange}
                          row
                          className="ratingsBox"
                        >
                          <FormControlLabel
                            value="4"
                            control={<Radio />}
                            label="4★ & above"
                          />
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label="3★ & above"
                          />
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="2★ & above"
                          />
                        </RadioGroup>
                      </div>
                      <div className="filter_divider"></div>
                    </Col>

                    <Col md={9} sm={12} xs={12}>
                      <Row className="justify-content-center">
                        {products &&
                          console.log("Number of products:", products.length)}
                        {products &&
                          products.map((product) => (
                            <Col
                              key={product._id}
                              md={4}
                              sm={6}
                              xs={12}
                              className="d-flex justify-content-center p-3"
                            >
                              <ProductCard product={product} />
                            </Col>
                          ))}
                      </Row>
                    </Col>
                  </Row>
                </Container>

                {/* Pagination */}

                <Container fluid className="paginationContainer">
                  <Row className="d-flex justify-content-center">
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={resultPerPage}
                      totalItemsCount={productsCount}
                      onChange={setCurrentPageNoHandler}
                      nextPageText="Next"
                      prevPageText="Prev"
                      firstPageText="First"
                      lastPageText="Last"
                      itemClass="page-item"
                      linkClass="page-link"
                      activeClass="pageItemActive"
                      activeLinkClass="pageLinkActive"
                      innerClass="pagination"
                    />
                  </Row>
                </Container>
              </container-fluid>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Products;

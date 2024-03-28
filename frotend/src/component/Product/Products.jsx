import React, { useEffect } from "react";
import "./Products.css";
import "aos/dist/aos.css";
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
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const categories = ["Books", "PDF", "Learning Aid"];

function Products() {
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
              <div
                className="emptyCartContainer "
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
              </div>
            </>
          ) : (
            <>
              <div className="productPage">
                <div style={{ marginTop: "-15px" }} data-aos="fade-down">
                  <img
                    src={require("../../Image/breadcrumbnew/product.jpg")}
                    alt=""
                  />
                </div>
                <div className="productBack">
                  <div style={{ padding: "20px 70px" }}>
                    <h1
                      style={{
                        textAlign: "start",
                        fontSize: "36px",
                        marginTop: "20px",
                      }}
                    >
                      Why <span className="highlight">book Reading</span> is
                      important
                    </h1>
                    <span
                      style={{
                        fontFamily: "'Roboto', sans-serif",
                        textAlign: "justify",
                        display: "inline-block",
                        fontSize: "17px",
                      }}
                    >
                      One of the great reasons that signify the importance of
                      book reading in our life is that books act as our best
                      friends. Friends are one of the most important parts of
                      our life. We can’t imagine our life without the
                      companionship of a good friend. Similarly, a book is like
                      a best friend that constantly inspires us to become the
                      best versions of ourselves. Books enrich our minds with
                      knowledge just like a good friend. We can learn a lot from
                      books and they can help us in overcoming our failures as
                      well as shape our minds.
                    </span>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <span
                        style={{
                          fontFamily: "'Roboto', sans-serif",
                          textAlign: "justify",
                          display: "inline-block",
                          fontSize: "17px",
                          marginTop: "2rem",
                        }}
                      >
                        A variety of tasks in daily life require reading and
                        understanding written instructions. If children do not
                        learn to read, they cannot read to learn. Children
                        should be encouraged to pick up a book they prefer.
                        Children may not have much reading time at school but
                        parents can encourage their children to pick up books at
                        home. Reading books helps in cognitive mental
                        stimulation and brain exercising, enhancing the child’s
                        imagination amongst many other benefits.
                      </span>
                      <h1
                        style={{
                          textAlign: "start",
                          fontSize: "36px",
                          marginTop: "20px",
                        }}
                      >
                        Benefits of{" "}
                        <span className="highlight">Reading Books</span>
                      </h1>
                      <span
                        style={{
                          fontSize: "17px",
                          marginTop: "14px",
                          fontWeight: "400",
                          textAlign: "justify",
                          display: "inline-block",
                          fontFamily: "'Roboto', sans-serif",
                        }}
                      >
                        Here are few good benefits of reading books. When you
                        read every day you:
                      </span>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item md={4} xs={12}>
                          <List sx={{ width: "100%" }}>
                            <ListItem>
                              <ListItemAvatar>
                                <MenuBookIcon
                                  fontSize="large"
                                  style={{ color: "#FF4E00" }}
                                />{" "}
                              </ListItemAvatar>
                              <ListItemText
                                primary={
                                  <Typography
                                    variant="body2"
                                    style={{
                                      fontSize: "17px",

                                      fontWeight: "400",
                                      textAlign: "justify",
                                      display: "inline-block",
                                      fontFamily: "'Roboto', sans-serif",
                                    }}
                                  >
                                    Gain valuable knowledge
                                  </Typography>
                                }
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <MenuBookIcon
                                  fontSize="large"
                                  style={{ color: "#FF4E00" }}
                                />{" "}
                              </ListItemAvatar>
                              <ListItemText
                                primary={
                                  <Typography
                                    variant="body2"
                                    style={{
                                      fontSize: "17px",

                                      fontWeight: "400",
                                      textAlign: "justify",
                                      display: "inline-block",
                                      fontFamily: "'Roboto', sans-serif",
                                    }}
                                  >
                                    Exercise your brain
                                  </Typography>
                                }
                              />
                            </ListItem>
                            <ListItem>
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
                                      fontSize: "17px",

                                      fontWeight: "400",
                                      textAlign: "justify",
                                      display: "inline-block",
                                      fontFamily: "'Roboto', sans-serif",
                                    }}
                                  >
                                    Improve your focus and concentration
                                  </Typography>
                                }
                              />
                            </ListItem>
                            <ListItem>
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
                                      fontSize: "17px",

                                      fontWeight: "400",
                                      textAlign: "justify",
                                      display: "inline-block",
                                      fontFamily: "'Roboto', sans-serif",
                                    }}
                                  >
                                    Improve your memory
                                  </Typography>
                                }
                              />
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid item md={4} xs={12}>
                          <List sx={{ width: "100%" }}>
                            <ListItem>
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
                                      fontSize: "17px",

                                      fontWeight: "400",
                                      textAlign: "justify",
                                      display: "inline-block",
                                      fontFamily: "'Roboto', sans-serif",
                                    }}
                                  >
                                    Enjoy entertainment
                                  </Typography>
                                }
                              />
                            </ListItem>

                            <ListItem>
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
                                      fontSize: "17px",

                                      fontWeight: "400",
                                      textAlign: "justify",
                                      display: "inline-block",
                                      fontFamily: "'Roboto', sans-serif",
                                    }}
                                  >
                                    Improve your ability to empathize
                                  </Typography>
                                }
                              />
                            </ListItem>
                            <ListItem>
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
                                      fontSize: "17px",

                                      fontWeight: "400",
                                      textAlign: "justify",
                                      display: "inline-block",
                                      fontFamily: "'Roboto', sans-serif",
                                    }}
                                  >
                                    Improve your communication skills
                                  </Typography>
                                }
                              />
                            </ListItem>
                            <ListItem>
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
                                      fontSize: "17px",

                                      fontWeight: "400",
                                      textAlign: "justify",
                                      display: "inline-block",
                                      fontFamily: "'Roboto', sans-serif",
                                    }}
                                  >
                                    Mental Stimulation
                                  </Typography>
                                }
                              />
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid item md={4} xs={12}>
                          <List sx={{ width: "100%" }}>
                            <ListItem>
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
                                      fontSize: "17px",

                                      fontWeight: "400",
                                      textAlign: "justify",
                                      display: "inline-block",
                                      fontFamily: "'Roboto', sans-serif",
                                    }}
                                  >
                                    Stronger Analytical Thinking Skills
                                  </Typography>
                                }
                              />
                            </ListItem>
                            <ListItem>
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
                                      fontSize: "17px",

                                      fontWeight: "400",
                                      textAlign: "justify",
                                      display: "inline-block",
                                      fontFamily: "'Roboto', sans-serif",
                                    }}
                                  >
                                    Improve your mental health
                                  </Typography>
                                }
                              />
                            </ListItem>
                            <ListItem>
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
                                      fontSize: "17px",

                                      fontWeight: "400",
                                      textAlign: "justify",
                                      display: "inline-block",
                                      fontFamily: "'Roboto', sans-serif",
                                    }}
                                  >
                                    Vocabulary Expansion
                                  </Typography>
                                }
                              />
                            </ListItem>
                            <ListItem>
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
                                      fontSize: "17px",

                                      fontWeight: "400",
                                      textAlign: "justify",
                                      display: "inline-block",
                                      fontFamily: "'Roboto', sans-serif",
                                    }}
                                  >
                                    Free Entertainment
                                  </Typography>
                                }
                              />
                            </ListItem>
                          </List>
                        </Grid>
                      </Grid>
                    </Collapse>

                    <Button
                      style={{
                        color: "#fff",
                        backgroundColor: "#FF4E00",
                        display: "flex",
                        marginTop: "10px",
                      }}
                      variant="contained"
                      onClick={handleExpandClick}
                    >
                      {expanded ? "Read Less" : "Read More"}
                    </Button>
                  </div>
                </div>

                <div className="prodcutPageTop">
                  <div className="filterBox">
                    {/* Price */}
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
                          step={700}
                          valueLabelDisplay="auto"
                          aria-labelledby="range-slider"
                        />
                      </div>
                      <div className="priceSelectors">
                        <div className="priceSelector">
                          <Select
                            value={price[0]}
                            onChange={(e) =>
                              setPrice([+e.target.value, price[1]])
                            }
                            className="priceOption"
                            IconComponent={ArrowDropDownIcon}
                            renderValue={(selected) =>
                              selected !== "" ? selected : "min"
                            } // Display "min" as default label
                          >
                            <MenuItem value={100} className="menu_item">
                              100
                            </MenuItem>
                            <MenuItem value={200} className="menu_item">
                              200
                            </MenuItem>
                            <MenuItem value={300} className="menu_item">
                              300
                            </MenuItem>
                            <MenuItem value={400} className="menu_item">
                              400
                            </MenuItem>
                            <MenuItem value={500} className="menu_item">
                              500
                            </MenuItem>
                            <MenuItem value={600} className="menu_item">
                              600
                            </MenuItem>
                            <MenuItem value={700} className="menu_item">
                              700
                            </MenuItem>
                            <MenuItem value={800} className="menu_item">
                              800
                            </MenuItem>
                            <MenuItem value={900} className="menu_item">
                              900
                            </MenuItem>
                            <MenuItem value={1000} className="menu_item">
                              1000
                            </MenuItem>
                            {/* Add more options as per your requirement */}
                          </Select>
                          <span className="toText">to</span>
                          <Select
                            value={price[1]}
                            onChange={(e) =>
                              setPrice([price[0], +e.target.value])
                            }
                            className="priceOption"
                            IconComponent={ArrowDropDownIcon}
                            renderValue={(selected) =>
                              selected !== "" ? selected : "max"
                            }
                          >
                            <MenuItem value={700} className="menu_item">
                              700
                            </MenuItem>
                            <MenuItem value={200} className="menu_item">
                              200
                            </MenuItem>
                            <MenuItem value={300} className="menu_item">
                              300
                            </MenuItem>
                            <MenuItem value={400} className="menu_item">
                              400
                            </MenuItem>
                            <MenuItem value={500} className="menu_item">
                              500
                            </MenuItem>
                            <MenuItem value={600} className="menu_item">
                              600
                            </MenuItem>
                            <MenuItem value={700} className="menu_item">
                              700
                            </MenuItem>
                            <MenuItem value={800} className="menu_item">
                              800
                            </MenuItem>
                            <MenuItem value={900} className="menu_item">
                              900
                            </MenuItem>

                            {/* Add more options as per your requirement */}
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="filter_divider"></div>

                    {/* Categories */}
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
                          <li className="category-link" key={index}>
                            <label
                              htmlFor={`category-${index}`}
                              className="category-label"
                            >
                              <input
                                type="checkbox"
                                id={`category-${index}`}
                                className="category-checkbox"
                                value={category}
                                checked={category === selectedCategory}
                                onChange={() => handleCategoryChange(category)}
                              />
                              {category}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="filter_divider"></div>
                    {/* Ratings */}
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
                    {/* Clear Filters */}
                  </div>

                  <div
                    className={products.length < 2 ? "products1" : "products"}
                  >
                    {products &&
                      products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                      ))}
                  </div>
                </div>

                {/* Pagination */}

                <div className="paginationBox">
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
                  />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Products;

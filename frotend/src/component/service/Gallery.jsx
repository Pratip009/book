import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { getGallery } from "../../../src/GlobalApi.js"; // Import your Axios API functions
import Grid from "@mui/material/Grid";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    marginTop: '100px',
    width: '100%',
    height: '300px',
    overflow: 'hidden',
    marginLeft: '0', // Reset margin to 0
    [theme.breakpoints.down('sm')]: {
      height: '200px', // Adjust height for small screens
    },
    [theme.breakpoints.down('xs')]: {
      height: '150px', // Adjust height for extra small screens
    },
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  imageListContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0 16px',
  },
  imageList: {
    width: '80%',
    height: 'auto',
    margin: 'auto',
    marginTop: '50px',
    backgroundColor: 'white',
    [theme.breakpoints.down('xs')]: {
      width: '100%', // Adjust width for extra small screens
    },
  },
  imageItem: {
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Show one image per row on extra small screens
    },
  },
}));

export default function Gallery() {
  const classes = useStyles();
  const [galleryData, setGalleryData] = useState([]);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    // Fetch gallery data when component mounts
    const fetchGallery = async () => {
      try {
        const response = await getGallery();
        console.log("Gallery API response:", response.data); // Log the API response
        setGalleryData(response.data.data); // Update state with fetched data
      } catch (error) {
        setError(error); // Set error state if there's an error
        console.error("Error fetching gallery data:", error);
      }
    };

    fetchGallery();

    // Cleanup function
    return () => {
      // Any cleanup code, if necessary
    };
  }, []);

  if (error) {
    return <div>Error fetching data: {error.message}</div>; // Render error message
  }

  return (
    <div
      className="container___"
      style={{ backgroundColor: "white", width: "100%", margin: 0, padding: 0 }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <div className={classes.imageContainer}>
            <img
              src={require('../../Image/gal11.png')}
              alt="About"
              className={classes.image}
            />
          </div>
        </Grid>
      </Grid>
      <div className="circle_text">
        <h1
          style={{
            textAlign: "center",
            fontSize: "36px",
            marginTop: "20px",
          }}
        >
          <span className="highlight">Gallery</span>
        </h1>
      </div>
      <div className={classes.imageListContainer}>
        <ImageList className={classes.imageList} cols={3} gap={16}>
          {galleryData.map((item) => (
            <ImageListItem key={item.id} className={classes.imageItem}>
              {item.attributes.images.data.attributes.url ? ( // Check if URL exists before rendering
                <img
                  srcSet={`${item.attributes.images.data.attributes.url}`}
                  src={`${item.attributes.images.data.attributes.url}`}
                  alt={item.attributes.description || "Image"} // Provide fallback alt text
                  loading="lazy"
                  style={{ width: '100%', height: 'auto' }}
                />
              ) : (
                <span>Image URL not found</span>
              )}
              <ImageListItemBar
                title={item.attributes.description}
                position="below"
                titleStyle={{
                  // Add custom styles to the title
                  fontSize: "16px", // Custom font size
                  fontWeight: "bold", // Custom font weight
                  color: "black", // Custom color
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

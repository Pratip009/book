import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// import { ImageListItemBar } from "@mui/material/ImageListItemBar";
export default function Gallery() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        overflowX: "hidden",
        marginTop: "100px",
      }}
    >
      <div className="container___">
      <h1
              style={{
                textAlign: "center",
                fontSize: "36px",
                marginTop: "20px",
              }}
            >
              <span className="highlight">Our Gallery </span>
             
            </h1>
        <Box sx={{ width: "auto", height: "100%", overflowY: "scroll" }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                />

                {/* <ImageListItemBar position="below" title={item.title} /> */}
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    </div>
  );
}

const itemData = [
  {
    img: "https://images.pexels.com/photos/5896836/pexels-photo-5896836.jpeg?auto=compress&cs=tinysrgb&w=600",

    title: "Bed",
    author: "swabdesign",
  },
  {
    img: "https://images.pexels.com/photos/3042432/pexels-photo-3042432.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Books",
    author: "Pavel Nekoranec",
  },
  {
    img: "https://images.pexels.com/photos/4260314/pexels-photo-4260314.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Sink",
    author: "Charles Deluvio",
  },
  {
    img: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Kitchen",
    author: "Christian Mackie",
  },
  {
    img: "https://images.pexels.com/photos/3184658/pexels-photo-3184658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Blinds",
    author: "Darren Richardson",
  },
  {
    img: "https://images.pexels.com/photos/5212335/pexels-photo-5212335.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Chairs",
    author: "Taylor Simpson",
  },
  {
    img: "https://images.pexels.com/photos/5905458/pexels-photo-5905458.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Laptop",
    author: "Ben Kolde",
  },
  {
    img: "https://images.pexels.com/photos/8363771/pexels-photo-8363771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Doors",
    author: "Philipp Berndt",
  },
  {
    img: "https://images.pexels.com/photos/2675047/pexels-photo-2675047.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coffee",
    author: "Jen P.",
  },
  {
    img: "https://images.pexels.com/photos/256491/pexels-photo-256491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Storage",
    author: "Douglas Sheppard",
  },
  {
    img: "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Candle",
    author: "Fi Bell",
  },
  {
    img: "https://images.pexels.com/photos/5428258/pexels-photo-5428258.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Coffee table",
    author: "Hutomo Abrianto",
  },
];

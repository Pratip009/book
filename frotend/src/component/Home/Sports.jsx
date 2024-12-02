import React from "react";
import Banner from "../Banner";
import mainImg from "../../Image/home/sport.png";
import pattern from "../../Image/Product/Frame 20.png";
import bookImg from "../../Image/home/teambook.png";
import star from "../../Image/home/teamstar.png";
export default function Sports() {
  return (
    <container-fluid>
      <container-fluid>
        <Banner
          title="Sports Training"
          mainImage={mainImg}
          iconLeft={bookImg}
          backgroundPattern={pattern}
          iconRight={star}
        />
      </container-fluid>
    </container-fluid>
  );
}

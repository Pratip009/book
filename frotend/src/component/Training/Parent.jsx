import { useState } from "react";
import "../ReadMore/ReadMore.css";
import { Button } from "@mui/material";
import ParentTab from "./ParentTab";
import "aos/dist/aos.css";
import AOS from "aos";
import React from "react";

const Parent = () => {
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="content">
      <div style={{ marginTop: "-15px", marginBottom: "15px" }}>
        <img src={require("../../Image/PW.png")} alt="" />
      </div>
      <span style={{ display: "flex", textAlign: "start" }}>
        Most of the parents always worry about their children &amp; don’t know
        how to deal with them. They may not know the fact that all children are
        unique in the way they process information and learn things from their
        parents. Our Successful Parenting workshop is especially for all such
        parents. Through this workshop, you will learn parenting skills to
        tackle your children ageing from 2 to 20 years. You can educate yourself
        to educate your child. Parents can apply real-life parenting techniques,
        taught in this workshop. You will find so many parenting advice in this
        workshop, which will teach you how to deal with your children. Your
        education did not teach you child psychology, that’s why you respond the
        same way your parents did. No one taught your parents “child
        psychology”. Someone needs to break this chain &amp; upgrade because
        with time new generation children are more advanced than ever. Parents
        have a huge part to play in understanding &amp; supporting their
        children’s emotional &amp; social needs. Packed with expert advice, key
        strategies and examples of positive parenting, Learning Needs reveals
        the secrets of raising happy, confident &amp; well-adjusted children.
      </span>

      <span className={`long-text ${collapse ? "expand" : ""}`}>
        <div style={{ marginTop: "2rem" }}>
          <ParentTab />
        </div>
      </span>

      <Button
        style={{
          color: "#fff",
          backgroundColor: "#f58c00",
          display: "flex",
        }}
        variant="contained"
        onClick={() => setCollapse((prev) => !prev)}
      >
        Read More..
      </Button>
    </div>
  );
};
export default Parent;

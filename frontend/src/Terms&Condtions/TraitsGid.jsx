import React from "react";
import { Grid, Card, Typography } from "@mui/material";
import { motion } from "framer-motion";
import increaseImg from "../Image/increase.png";
import bearImg from "../Image/bear.png";
import bestImg from "../Image/best.png";
import familyImg from "../Image/family.png";
import negoImg from "../Image/nego.png";
import creativeBrainImg from "../Image/creative-brain.png";
import youCanImg from "../Image/you-can.png";
import tarImg from "../Image/tar.png";
import inventoryImg from "../Image/inventory.png";
import warningImg from "../Image/warning.png";
import dreamImg from "../Image/dream.png";
import developerImg from "../Image/developer.png";
import supportImg from "../Image/24-hours-support.png";
import "./TraitsGid.css";
const traits = [
  { src: increaseImg, letterr: "L-", textw: "LEADERSHIP" },
  { src: bearImg, letterr: "E-", textw: "EFFECTIVENESS" },
  { src: bestImg, letterr: "A-", textw: "ATTITUDE" },
  { src: familyImg, letterr: "R-", textw: "RELATION" },
  { src: negoImg, letterr: "N-", textw: "NEGOTIATION" },
  { src: creativeBrainImg, letterr: "I-", textw: "INNOVATION" },
  { src: youCanImg, letterr: "N-", textw: "NURTURE" },
  { src: tarImg, letterr: "G-", textw: "GOAL" },
  { src: inventoryImg, letterr: "N-", textw: "NEEDFUL" },
  { src: warningImg, letterr: "E-", textw: "ESSENTIAL" },
  { src: dreamImg, letterr: "E-", textw: "EXPECTATIONAL" },
  { src: developerImg, letterr: "D-", textw: "DEVELOPMENT" },
  { src: supportImg, letterr: "S-", textw: "SERVICE" },
];

const rowColors = ["#FFD700", "#ADFF2F", "#87CEEB"]; // Colors for each row

const TraitsGrid = () => {
  return (
    <>
      <div
        style={{
          marginTop: "2rem",
        }}
      >
        <Grid container spacing={3} className="traits-container">
          {traits.slice(0, 10).map((trait, index) => {
            const rowIndex = Math.floor(index / 5); // Calculate row index
            return (
              <Grid item xs={12} sm={6} md={2.4} key={index}>
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                >
                  <div className={`trait-card row-${rowIndex}`}>
                    {/* Parent container with column layout */}
                    <Grid container direction="row" alignItems="center">
                      {/* Column for the image */}
                      <Grid item xs={5}>
                        <img
                          src={trait.src}
                          alt={trait.textw}
                          className="trait-image"
                          style={{ width: "100%", objectFit: "contain" }}
                        />
                      </Grid>
                      {/* Column for the text */}
                      <Grid item xs={7}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                          }}
                        >
                          <span
                            className="trait-letter"
                            style={{ fontWeight: "bold", marginRight: "8px" }}
                          >
                            {trait.letterr}
                          </span>
                          <span className="trait-text">
                            {trait.textw.toLowerCase()}
                          </span>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>

        {/* Separate grid for last 3 cards */}
        <Grid
          container
          spacing={3}
          className="last-row-container"
          style={{
            marginTop: ".4em",
          }}
        >
          {traits.slice(10).map((trait, index) => {
            const rowIndex = Math.floor(index / 5); // Calculate row index for the last row
            return (
              <Grid item xs={12} sm={6} md={2.4} key={index + 10}>
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1, delay: (index + 10) * 0.1 }}
                >
                  <div className={`trait-card last-row-card row-${rowIndex}`}>
                    {/* Parent Grid container for two-column layout */}
                    <Grid container direction="row" alignItems="center">
                      {/* Column for the image */}
                      <Grid item xs={5}>
                        <img
                          src={trait.src}
                          alt={trait.textw}
                          className="trait-image"
                          style={{ width: "100%", objectFit: "contain" }}
                        />
                      </Grid>
                      {/* Column for the text */}
                      <Grid item xs={7}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                          }}
                        >
                          <span
                            className="trait-letter"
                            style={{ fontWeight: "bold", marginRight: "8px" }}
                          >
                            {trait.letterr}
                          </span>
                          <span className="trait-text">
                            {trait.textw.toLowerCase()}
                          </span>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};

export default TraitsGrid;

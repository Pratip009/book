import React from "react";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import Book from "../../Image/home/teambook.png";
import Globe from "../../Image/home/globe1.png";
import star from "../../Image/home/Vector.png";
import Tree from "../../Image/home/teamrocket.png";
import { Container } from "@mui/material";
import "./ProgramList.css"; // Import external CSS file
import HeaderWithUnderline from "../UnderLineAnimation/HeaderWithUnderline";

const programs = [
  "Effective Communication",
  "Peak Performance",
  "Leadership Innovation",
  "Multipurpose Theme",
  "Power of Influence",
  "Success with Change",
  "Complaint Handling",
  "Questioning Skills",
  "Public Speaking",
  "Anger Management",
  "Dealing Difficult Situations",
  "Presentation Skills",
  "Multipurpose Theme",
  "Assertiveness in Action",
  "Listening Skills",
  "Effective Meetings",
  "Think Your Way to Success",
  "Team Building",
];

const ProgramCard = ({ name }) => (
  <Grid item md={4} sm={6} xs={12}>
    <div className="program-card">
      <img src={star} alt="Star" />
      <span>{name}</span>
    </div>
  </Grid>
);

const ProgramList = () => (
  <div className="program-container">
    {/* Clipart Decorations */}
    <img src={Tree} alt="Rocket" className="tree" />
    <img src={Book} alt="Book" className="book" />
    <img src={Globe} alt="Globe" className="globe" />

    {/* Title */}

    <HeaderWithUnderline
      sentence="List of Programs"
      highlightedWord="Programs"
    />
    {/* Subtitle */}
    <p>
      There are many different programs offered by Learning Needs that will
      enhance your career in a positive way.
    </p>

    {/* Grid of Programs */}
    <Grid container spacing={3} className="program-list">
      {programs.map((program, index) => (
        <ProgramCard key={index} name={program} />
      ))}
    </Grid>
  </div>
);

export default ProgramList;

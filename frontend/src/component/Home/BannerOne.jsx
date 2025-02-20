import React from 'react';
import './BannerOne.css';
import childImage from '../../Image/heroslider/01-3.png.png';
import hotAirBalloonIcon from '../../Image/heroslider/parasuit.png.png';
import questionMarkIcon from '../../Image/heroslider/star.png.png';
import bookIcon from '../../Image/heroslider/book.png.svg';
import beeIcon from '../../Image/heroslider/bee-1.png.png';

const BannerOne = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="text-content">
          <h1>Empowering Kids With Smart Education</h1>
          <p>Innovative learning solutions designed to boost creativity, critical thinking, and academic success</p>
          <button className="explore-button">Explore Today</button>
        </div>
        <div className="image-content">
          <img src={childImage} alt="Child with books and magnifying glass" className="child-image" />
          <img src={beeIcon} alt="Bee icon" className="bee-icon" />
        </div>
      </div>
      <div className="background-icons">
        <img src={hotAirBalloonIcon} alt="Hot air balloon icon" className="hot-air-balloon-icon" />
        <img src={questionMarkIcon} alt="Question mark icon" className="question-mark-icon" />
        <img src={bookIcon} alt="Book icon" className="book-icon" />
      </div>
    </div>
  );
};

export default BannerOne;

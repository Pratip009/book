import React from "react";
import "./HeaderWithUnderline.css";

const HeaderWithUnderline = ({ sentence = "", highlightedWord = "" }) => {
  if (!sentence || !highlightedWord) {
    return (
      <div className="header-container">
        <h1 className="header-title">{sentence}</h1>
      </div>
    );
  }

  // Split the sentence and retain the highlighted word
  const parts = sentence.split(new RegExp(`(${highlightedWord})`, "g"));

  return (
    <div className="header-container">
      <h1 className="header-title">
        {parts.map((part, index) =>
          part === highlightedWord ? (
            <span key={index} className="highlighted-text">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </h1>
    </div>
  );
};

export default HeaderWithUnderline;

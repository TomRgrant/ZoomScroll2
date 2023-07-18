import React from "react";
import './ZoomScroll.css';

const ZoomScroll = () => {
  const frog = () => {
    let move = window.getComputedStyle(document.documentElement).getPropertyValue('--move');
    let newMove = parseInt(move) + 10;
    document.documentElement.style.setProperty('--move', `${newMove}px`);
  };

  return (
    <>
      <div className="center slide">
        <h1>This is floating</h1>
        <button onClick={frog}>Press</button>
      </div>
    </>
  );
};

export default ZoomScroll;

import React from "react";
import './ZoomScroll.css';

const ZoomScroll = () => {
  const frog = (e) => {
    let move = window.getComputedStyle(document.documentElement).getPropertyValue('--move');
    let newMove = 0;
    if (e.deltaY > 0){
        newMove = parseInt(move) + 20; // number is for how many px to move
    } else {
        newMove = parseInt(move) - 20;
    }
    document.documentElement.style.setProperty('--move', `${newMove}px`);
  };

  return (
    <>
    <div onWheel={frog} className="scroll-area">
      <div className="center slide">
        <h1>This is floating</h1>
        <button onClick={frog}>Press</button>
      </div>
    </div>
    </>
  );
};

export default ZoomScroll;

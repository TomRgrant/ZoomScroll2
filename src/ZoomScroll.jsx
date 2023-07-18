import React from "react";
import "./ZoomScroll.css";

const ZoomScroll = () => {
  const frog = (e) => {
    // Getting css variables
    let moveX1 = window.getComputedStyle(document.documentElement).getPropertyValue('--move-x-1');
    let moveY1 = window.getComputedStyle(document.documentElement).getPropertyValue('--move-y-1');
    let moveX2 = window.getComputedStyle(document.documentElement).getPropertyValue('--move-x-2');
    let moveY2 = window.getComputedStyle(document.documentElement).getPropertyValue('--move-y-2');

    let newMoveX1 = parseInt(moveX1);
    let newMoveY1 = parseInt(moveY1);
    let newMoveX2 = parseInt(moveX2);
    let newMoveY2 = parseInt(moveY2);

    if (e.deltaY > 0) {
      newMoveY1 += 20; // Number is for how many pixels to move vertically
      newMoveX1 += 20; // ^ For horizontal
    } else {
      newMoveY1 -= 20;
      newMoveX1 -= 20;
    }

    // Update the CSS variables for both X and Y movements
    document.documentElement.style.setProperty('--move-x-1', `${newMoveX1}px`);
    document.documentElement.style.setProperty('--move-y-1', `${newMoveY1}px`);
    document.documentElement.style.setProperty('--move-x-2', `${newMoveX2}px`);
    document.documentElement.style.setProperty('--move-y-2', `${newMoveY2}px`);
  };

  return (
    <div className="scroll-area" onWheel={frog}>
      <div className="center slide move-1">
        <h1>This is floating</h1>
        <button>Press</button>
      </div>

      <div className="center slide move-2">
        <h1>This is floating</h1>
        <button>Press</button>
      </div>
    </div>
  );
};

export default ZoomScroll;

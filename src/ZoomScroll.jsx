import React from "react";
import "./ZoomScroll.css";

const ZoomScroll = () => {
  const frog = (e) => {
    // Getting css variables
    let moveX1 = window.getComputedStyle(document.documentElement).getPropertyValue('--move-x-1');
    let moveY1 = window.getComputedStyle(document.documentElement).getPropertyValue('--move-y-1');

    let moveX2 = window.getComputedStyle(document.documentElement).getPropertyValue('--move-x-2');
    let moveY2 = window.getComputedStyle(document.documentElement).getPropertyValue('--move-y-2');

    let moveX3 = window.getComputedStyle(document.documentElement).getPropertyValue('--move-x-3');
    let moveY3 = window.getComputedStyle(document.documentElement).getPropertyValue('--move-y-3');

    let moveX4 = window.getComputedStyle(document.documentElement).getPropertyValue('--move-x-4');
    let moveY4 = window.getComputedStyle(document.documentElement).getPropertyValue('--move-y-4');

    let newMoveX1 = parseInt(moveX1);
    let newMoveY1 = parseInt(moveY1);

    let newMoveX2 = parseInt(moveX2);
    let newMoveY2 = parseInt(moveY2);

    let newMoveX3 = parseInt(moveX3);
    let newMoveY3 = parseInt(moveY3);

    let newMoveX4 = parseInt(moveX4);
    let newMoveY4 = parseInt(moveY4);

    // Div 1
    if (e.deltaY > 0) {
      newMoveY1 += 20; // Number is for how many pixels to move vertically
      newMoveX1 += 20; // ^ For horizontal
    } else {
      newMoveY1 -= 20;
      newMoveX1 -= 20;
    }

    // Div 2
    if (e.deltaY > 0) {
        newMoveY2 -= 20;
        newMoveX2 -= 20;
      } else {
        newMoveY2 += 20;
        newMoveX2 += 20;
      }

    // Div 3
    if (e.deltaY > 0) {
        newMoveY3 += 20;
        newMoveX3 -= 20;
      } else {
        newMoveY3 -= 20;
        newMoveX3 += 20;
      }

    // Div 4
    if (e.deltaY > 0) {
        newMoveY4 -= 20;
        newMoveX4 += 20;
      } else {
        newMoveY4 += 20;
        newMoveX4 -= 20;
      }


    // Update the CSS variables for both X and Y movements
    document.documentElement.style.setProperty('--move-x-1', `${newMoveX1}px`);
    document.documentElement.style.setProperty('--move-y-1', `${newMoveY1}px`);
    document.documentElement.style.setProperty('--move-x-2', `${newMoveX2}px`);
    document.documentElement.style.setProperty('--move-y-2', `${newMoveY2}px`);
    document.documentElement.style.setProperty('--move-x-3', `${newMoveX3}px`);
    document.documentElement.style.setProperty('--move-y-3', `${newMoveY3}px`);
    document.documentElement.style.setProperty('--move-x-4', `${newMoveX4}px`);
    document.documentElement.style.setProperty('--move-y-4', `${newMoveY4}px`);
  };

  return (
    <div className="scroll-area" onWheel={frog}>
      <div className="center slide move-1 transition-1s">
        <h1>Div 1</h1>
        <button>Press</button>
      </div>

      <div className="center slide move-2 transition-1s">
        <h1>Div 2</h1>
        <button>Press</button>
      </div>

      <div className="center slide move-3 transition-1s">
        <h1>Div 3</h1>
        <button>Press</button>
      </div>

      <div className="center slide move-4 transition-1s">
        <h1>Div 4</h1>
        <button>Press</button>
      </div>
    </div>
  );
};

export default ZoomScroll;

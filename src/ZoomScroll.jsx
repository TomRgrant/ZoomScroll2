import React from "react";
import "./ZoomScroll.css";

const ZoomScroll = () => {



  const zoom = (e) => {
    // Getting css variables
    let moveX1 = window.getComputedStyle(document.documentElement).getPropertyValue('--move-x-1');
    let moveY1 = window.getComputedStyle(document.documentElement).getPropertyValue('--move-y-1');

    let moveX2 = window.getComputedStyle(document.documentElement).getPropertyValue('--move-x-2');
    let moveY2 = window.getComputedStyle(document.documentElement).getPropertyValue('--move-y-2');

    let moveX3 = window.getComputedStyle(document.documentElement).getPropertyValue('--move-x-3');
    let moveY3 = window.getComputedStyle(document.documentElement).getPropertyValue('--move-y-3');

    let moveX4 = window.getComputedStyle(document.documentElement).getPropertyValue('--move-x-4');
    let moveY4 = window.getComputedStyle(document.documentElement).getPropertyValue('--move-y-4');

    // Changes ^ into usable int
    let newMoveX1 = parseInt(moveX1);
    let newMoveY1 = parseInt(moveY1);

    let newMoveX2 = parseInt(moveX2);
    let newMoveY2 = parseInt(moveY2);

    let newMoveX3 = parseInt(moveX3);
    let newMoveY3 = parseInt(moveY3);

    let newMoveX4 = parseInt(moveX4);
    let newMoveY4 = parseInt(moveY4);


    // Div 1
    if (parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--opacity-2')) >= 1){
        
        if (e.deltaY > 0) {
        newMoveY1 -= 13; // Number is for how many pixels to move vertically
        newMoveX1 -= 30; // ^ For horizontal

        let scale = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--scale-1'));
            scale = scale + 0.1;
            document.documentElement.style.setProperty('--scale-1', parseFloat(scale));

            let opacity = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--opacity-1'));
            opacity += 0.25;
            document.documentElement.style.setProperty('--opacity-1', parseFloat(opacity));
        } else {
        if (newMoveX4 > 0){
        newMoveY1 += 13; // Number is for how many pixels to move back on opposite scroll
        newMoveX1 += 30;
        }

            let scale = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--scale-1'));
            if ((scale - 0.1) > 1){
                scale = scale - 0.1;
                document.documentElement.style.setProperty('--scale-1', parseFloat(scale));
            }

            let opacity = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--opacity-1'));
            if (opacity > 0){
                opacity -= 0.25;
                document.documentElement.style.setProperty('--opacity-1', parseFloat(opacity));
            }
        }
    }

    // Div 2
    if (parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--opacity-3')) >= 1){
            if (e.deltaY > 0) {
                newMoveY2 += 13;
                newMoveX2 += 30;

                let scale = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--scale-2'));
                scale = scale + 0.1;
                document.documentElement.style.setProperty('--scale-2', parseFloat(scale));

                let opacity = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--opacity-2'));
                opacity += 0.25;
                document.documentElement.style.setProperty('--opacity-2', parseFloat(opacity));
            } else {
            if (newMoveX4 > 0){
                newMoveY2 -= 13;
                newMoveX2 -= 30;
                };

                let scale = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--scale-2'));
                if (scale - 0.1 > 1){
                    scale = scale - 0.1;
                    document.documentElement.style.setProperty('--scale-2', parseFloat(scale));
                }

                let opacity = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--opacity-2'));
                if (opacity > 0){
                    opacity -= 0.25;
                    document.documentElement.style.setProperty('--opacity-2', parseFloat(opacity));
                }
            }
    }

    // Div 3
    if (parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--opacity-4')) >= 1){
        if (e.deltaY > 0) {
            newMoveY3 += 13;
            newMoveX3 -= 30;

            let scale = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--scale-3'));
            scale = scale + 0.1;
            document.documentElement.style.setProperty('--scale-3', parseFloat(scale));

            let opacity = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--opacity-3'));
            opacity += 0.25;
            document.documentElement.style.setProperty('--opacity-3', parseFloat(opacity));
            console.log('afafs', opacity);
        } else {
        if (newMoveX4 > 0){
            newMoveY3 -= 13;
            newMoveX3 += 30;
            };
            let scale = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--scale-3'));
            if (scale - 0.1 > 1){
                scale = scale - 0.1;
                document.documentElement.style.setProperty('--scale-3', parseFloat(scale));
            }

            let opacity = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--opacity-3'));
            if (opacity > 0){
                opacity -= 0.25;
                document.documentElement.style.setProperty('--opacity-3', parseFloat(opacity));
            }
        }
    }

    // Div 4
    if (e.deltaY > 0) {
        newMoveY4 -= 13;
        newMoveX4 += 30;

        // Scaling functions
        let scale = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--scale-4'));
        scale = scale + 0.1;
        document.documentElement.style.setProperty('--scale-4', parseFloat(scale));

        // Opcaity functions
        let opacity = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--opacity-4'));
        opacity += 0.25;
        document.documentElement.style.setProperty('--opacity-4', parseFloat(opacity));

      } else {
        if (newMoveX4 > 0){
            newMoveY4 += 13;
            newMoveX4 -= 30;
        }
        let scale = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--scale-4'));
        if (scale - 0.1 > 1){
            scale = scale - 0.1;
            document.documentElement.style.setProperty('--scale-4', parseFloat(scale));
        }

        let opacity = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--opacity-4'));
        if (opacity > 0){
            opacity -= 0.25;
            document.documentElement.style.setProperty('--opacity-4', parseFloat(opacity));
        }
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
    <div className="scroll-area" onWheel={zoom}>
      <div className="center move-1 transition-1s">
        <img className="div-img" src="https://static.nationalgeographic.co.uk/files/styles/image_3200/public/mountain-range-appenzell-switzerland_0.jpg?w=1190&h=794" alt="" />
      </div>

      <div className="center move-2 transition-1s">
      <img className="div-img" src="https://www.viewbug.com/media/mediafiles/2015/06/02/55442643_medium.jpg" alt="" />
      </div>

      <div className="center move-3 transition-1s">
      <img className="div-img" src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/blogs/18725/images/mM87l2ZsQRSawMLLRlFF_FallLandscape7-.jpg" alt="" />
      </div>

      <div className="center move-4 transition-1s">
      <img className="div-img" src="https://petapixel.com/assets/uploads/2022/08/fdfs11-800x533.jpg" alt="" />
      </div>

      <h1 className="scroll-text">Scroll To View Gallery</h1>
    </div>
  );
};

export default ZoomScroll;

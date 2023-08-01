import React from "react";

function Tilt() {
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  const customOptions = {
    reverse: true,
    max: 45,
    perspective: 1500,
    scale: 1.2,
    speed: 2000,
    transition: true,
    axis: "X",
    reset: false,
    easing: "cubic-bezier(.2,.8,.3,1)",
  };
}

export default Tilt;

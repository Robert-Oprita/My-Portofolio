import React from "react";
import { FaArrowDown } from "react-icons/fa"; // Exemplu de utilizare a unui icon săgeată

const ArrowAnimation = () => {
  return (
    <div className="ArrowAnimation text-center mt-12 ">
      <p className="text-white mb-8 text-2xl italic ">Let's scroll together</p>
      <div className=" bottom-8 text-center transform -translate-x-1/2 animate-bounce ">
        <FaArrowDown className="text-white text-4xl ml-20" />
      </div>
    </div>
  );
};

export default ArrowAnimation;

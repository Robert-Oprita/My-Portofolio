import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import profil from "../assets/Profil01.jpg";

const SignatureHome = () => {
  const [text] = useTypewriter({
    words: ["Robert Oprița", "Frontend Developer"],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 70,
  });

  return (
    <div className="Signature mt-28 2xl:grid grid-cols-2-reverse">
      <img
        src={profil}
        alt="second profil"
        className=" h-auto max-w-sm border-2  border-solid border-white lg:max-w-lg "
      />
      <div className="useTyper w-full mt-4 lg:mt-8">
        <span className="text-white text-2xl mr-3 ml-20 lg:text-4xl">I'm</span>
        <span className="font-bold text-orange-500 text-2xl lg:text-4xl">
          {text}
        </span>
      </div>
    </div>
  );
};

export default SignatureHome;

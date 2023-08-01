import React from "react";
import FindMe from "../components/FindMe";
import profil from "../assets/Profil01.jpg";
import SignatureHome from "../components/SignatureHome";
import ArrowAnimation from "../components/animations/ArrowAnimation";

const Home = () => {
  return (
    <div
      className="wrapperHome bg-neutral-800   h-auto  flex flex-col items-center justify-start pb-8  lg: "
      id="home"
    >
      <SignatureHome />
      <FindMe />
      <ArrowAnimation />
    </div>
  );
};

export default Home;

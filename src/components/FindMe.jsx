import React from "react";
import { BsInstagram, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import SocialLink from "../components/SocialLink";
import TitleSections from "./TitleSections";
import { FaArrowDown } from "react-icons/fa";
import ArrowAnimation from "./animations/ArrowAnimation";
import AnimationSections from "./animations/AnimationSections.jsx.jsx";

const FindMe = () => {
  return (
    <AnimationSections>
      <div className="findMe grow-0 h-14  mt-36 mb-24 ">
        <h1 className="text-center text-3xl text-white mb-2 lg:text-4xl bold ">
          Find Me On:
        </h1>

        <div className=" flex text-center">
          <a href="https://www.linkedin.com/in/robert-opri%C8%9Ba-9339b0223/">
            <SocialLink
              icon={
                <BsLinkedin
                  size={40}
                  className="text-linkedin-blue hover:text-blue-600  active:text-blue-700"
                />
              }
            />
          </a>
          <a href="https://github.com/Robert-Oprita">
            <SocialLink
              icon={
                <BsGithub
                  size={40}
                  className="text-white hover:text-white active:text-black"
                />
              }
            />
          </a>
          <a href="https://www.instagram.com/_robert_stefan29/">
            <SocialLink
              icon={
                <BsInstagram
                  size={40}
                  className="text-instagram-purple hover:text-pink-500 active:text-red-600"
                />
              }
            />
          </a>
          <a href="https://www.facebook.com/robertzu.robertzu/">
            <SocialLink
              icon={
                <BsFacebook
                  size={40}
                  className="text-blue-700 hover:text-blue-800 active:text-blue-800"
                />
              }
            />
          </a>
        </div>
      </div>
    </AnimationSections>
  );
};

export default FindMe;

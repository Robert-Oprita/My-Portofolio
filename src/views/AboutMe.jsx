import React, { useEffect, useState } from "react";
import TitleSections from "../components/TitleSections";
import Button from "../components/Button";
import TextAnimation from "../components/animations/TextAnimation";

const AboutMe = () => {
  return (
    <div
      className="aboutMe  w-screen h-auto bg-neutral-800 pt-36 lg:pt-44 pb-44"
      id="aboutMe"
    >
      <TitleSections titleS="AboutMe" />

      <div className="descriptionAbout bg-neutral-800  flex flex-col items-center  px-20 w-100 ">
        <TextAnimation>
          <ul className=" rounded-2xl text-white text-2xl mb-6 font-primary ">
            <li>
              I am a Frontend developer with a{" "}
              <span className="text-orange-500 italic text-2xl">passion</span>{" "}
              for building beautiful and user-friendly websites.
            </li>

            <li>
              I am ecited to put my skills to use in a professional setting.
            </li>

            <li>
              I am <span>quick lerner and a team player</span>, and I am
              confident that I can be valuable asset to any web developer{" "}
              <span>team.</span>
            </li>
          </ul>
        </TextAnimation>
        <Button />
      </div>
    </div>
  );
};
export default AboutMe;

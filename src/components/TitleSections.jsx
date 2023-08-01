import React from "react";
import TextAnimation from "./animations/TextAnimation";

const TitleSections = (props) => {
  return (
    <div>
      <TextAnimation>
        <h1 className="text-center mb-4 pt-8 text-4xl text-white lg:text-5xl">
          {props.titleS}
        </h1>
      </TextAnimation>
    </div>
  );
};
export default TitleSections;

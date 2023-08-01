import React from "react";
import TitleSections from "./TitleSections";

function Knowledge(props) {
  return (
    <div className="experience border-2 border-solid border-orange-500 text-white flex-col items-center justify-center w-auto text-2xl rounded-lg p-6 m-10 shadow-gray-500 lg:border-none ">
      <TitleSections titleS={props.titleE} />
      <p className="mt-8">
        <span className="text-red-500 font font-semibold">{props.exp}</span>{" "}
        <br></br>
        {props.info}
      </p>
      <p className="text-end mt-8">{props.coming}</p>
    </div>
  );
}

export default Knowledge;

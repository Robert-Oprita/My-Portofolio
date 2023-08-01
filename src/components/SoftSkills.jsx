import React from "react";

function SoftSkills(props) {
  const { imgSkill, titleSkill } = props;

  return (
    <div className="bg-white  shadow-white shadow-2xl md: md:border-2 border-double border-slate-400  flex  flex-col mb-5  mt-2 md:flex-row-2 mr-4 ml-2 xl:mr-6   ">
      <div
        className=" 
             bg-white  pt-1 h-48 w-72 lg:w-72 flex justify-center px-1 2xl:w-80 "
      >
        {props.imgSkill}
      </div>

      <p className="text-ml  font-sans text-black text-center pt-2  pb-1 font-semibold">
        {props.titleSkill}
      </p>
    </div>
  );
}

export default SoftSkills;

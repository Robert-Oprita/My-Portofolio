import React from "react";

const InfoContact = (props) => {
  return (
    <div className="contentContact  rounded-lg p-4  flex      text-white">
      <div className="flex flex-row ml-20  ">
        {props.icon}
        <h1 className="ml-2 text-xl ">{props.title}</h1>
      </div>
    </div>
  );
};
export default InfoContact;

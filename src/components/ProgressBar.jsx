import React from "react";

function ProgressBar(props) {
  const { progress, color } = props;
  return (
    <>
      <div className="backLine w-64 bg-gray-300 rounded-lg overflow-hidden ml-4 ">
        <div className={`h-4 ${color}`} style={{ width: `${progress}%` }}></div>
      </div>
      <p className="  flex justify-center  text-black font-semibold">
        {progress}%
      </p>
    </>
  );
}

export default ProgressBar;

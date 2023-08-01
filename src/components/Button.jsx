import React from "react";

const Button = (props) => {
  const handleDownloadPDF = () => {
    const pdfFile =
      "https://drive.google.com/file/d/1W83CWLWmEUTLdZ2wDIVH1B35QstCWm4K/view?usp=drive_link";

    const downloadLink = document.createElement("a");
    downloadLink.href = pdfFile;
    downloadLink.download = "Download-CV.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <div className="flex justify-center mt-10">
      <button
        type="button"
        class="text-white  bg-gradient-to-r from-orange-300 via-orange-500 to-red-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800  rounded-lg text-xl px-6 py-2.5 text-center mr-2 mb-2"
        onClick={handleDownloadPDF}
      >
        Download CV
      </button>
    </div>
  );
};

export default Button;

import React from "react";
import PageComp from "../component/page";
import resumePDF from "../assets/images/data/resumepdf.pdf"
function ResumeComp() {
  function Resume({ isMobile, lightMode, showMenu }) {
    return (
      <div
        className={`profile columns-auto mx-auto container flex items-center h-fit `}
      >
        <div
          className={`font-Poppins w-wrapper mx-auto flex flex-col ${
            lightMode ? "text-DarkBlueText" : ""
          }`}
        >
            <img src={require("../assets/images/data/"+"resumepng.png")} className="mt-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"></img>
            <a download={resumePDF} target="_blank" rel="noopener noreferrer">
            <button className="py-2 px-4 w-fit my-4">Download CV</button>
            </a>
        </div>
      </div>
    );
  }
  return <PageComp content={(props) => <Resume {...props} />} />;
}
export default ResumeComp;

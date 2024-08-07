import React, { useEffect } from "react";
import "../styles/resume.css"
import "../styles/root.css"
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
function ResumeComp({ isMobile, lightMode, showMenu }) {
  function downloadPDF(){
    const resumePDF=require('../assets/images/data/'+'resumepdf.pdf')
    const createAnchor=document.createElement('a')
    createAnchor.href=resumePDF
    createAnchor.download="Resume Ramzi"
    document.body.appendChild(createAnchor)    
    createAnchor.click()
    document.body.removeChild(createAnchor)
  }
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
            
            <button className={`py-2 px-4 w-fit my-4 rounded-md ${lightMode?'bg-[#6E75A8] after:bg-[#8D91C7]':'bg-Pink600 after:bg-DarkPink'} button-animate`} onClick={downloadPDF}>Download Resume</button>
            <div
                className={`${
                  showMenu ? "" : "margin-navlogo"
                } flex items-center`}
              >
                <NavLink
                  to="/"
                  className={`flex no-underline bg-no-repeat bg-borderBottom bg-centerBott transition-bg_Size duration-TwoMilliSecond ease-in-out hover:bg-borderBottomFull  ${
                    lightMode
                      ? "text-DarkBlueText hover:bg-DarkModeBody"
                      : "text-LightPink hover:bg-LightModeBody"
                  }`}
                >
                  Go to Home
                </NavLink>
                <svg
                  className="arrow-right"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
              </div>
              <Footer isMobile={isMobile} lighMode={lightMode} />
        </div>
      </div>
    );
  }
  return <Resume lightMode={lightMode} showMenu={showMenu} isMobile={isMobile}/>;
}
export default ResumeComp;

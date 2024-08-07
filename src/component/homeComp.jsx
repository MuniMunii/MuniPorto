import React from "react";
import {
    NavLink,
  } from "react-router-dom";
  import Footer from "../component/Footer";
  import { TypeAnimation } from "react-type-animation";
function HomeProfileComp({ showMenu, isMobile , lightMode }) {
    return (
      <>
        <div
          className={`profile columns-auto mx-auto container flex justify-center items-center`}
        >
          {/* profile */}
          <div
            className={`font-Poppins w-wrapper mx-auto flex-col my-auto ${
              lightMode ? "text-DarkBlueText" : ""
            }`}
          >
            <h1 className={` font-bolder ${lightMode?'text-DarkBlueText':'text-Pink300'} ${isMobile?'text-[4rem]':'text-h1Xl'}`}>Greetings there!</h1>
            <h1 className={`text-h1Med font-bold`}>I'am <TypeAnimation sequence={['Ramzi.']} speed={400} repeat={1} cursor={true}/></h1>
            <p className={`font-bold ${lightMode?'text-DarkBlueText':''}`}>
              I'm just a person who having a strong 
              passion in Programing especially in Web developments. Lets read more <span><NavLink to='/profile' className={`hover:underline ${lightMode?'text-DarkMossGreen':'text-LightPink'}`}>about me</NavLink></span>. I have a solid
              background in HTML, CSS, and JavaScript. I like to keep up with
              the newest developments in website like React and among other
              technologies to make sure my <span><NavLink to="/portofolio" className={`hover:underline ${lightMode?'text-DarkMossGreen':'text-LightPink'}`}>Project</NavLink></span> is constantly
              Up to date. My aim is to transform creativity into useful
              and engaging digital environments, ensuring that every user
              experience is seamless and pleasurable. Together, let's make
              something incredible!
            </p>
            <div
              className={`${
                showMenu ? "" : "margin-navlogo"
              } flex mt-1 items-center`}
            >
              <NavLink
                to="/profile"
                className={`flex no-underline bg-no-repeat bg-borderBottom bg-centerBott transition-bg_Size duration-TwoMilliSecond ease-in-out hover:bg-borderBottomFull  ${
                  lightMode
                    ? "text-DarkBlueText hover:bg-DarkModeBody"
                    : "text-LightPink hover:bg-LightModeBody"
                }`}
              >
                See More About Me
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
            <Footer isMobile={isMobile} lightMode={lightMode}/>
          </div>
        </div>
      </>
    );
  }
export default HomeProfileComp
import React, { useEffect, useRef, useState } from "react";
import NavBar from "../component/NavBar";
import "../styles/root.css";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import PageNormal from "../component/page";
import { myData } from "../utils/portoData";
import "../styles/portofolio.css";
import "../lib/font-awesome-4.7.0/css/font-awesome.min.css";
import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";

function PortofolioProt() {
  const [curtainContentState, setCurtainState] = React.useState(false);
  const [selectedContent, setSelectedContent] = React.useState(null);
  const [genreState, setGenreState] = React.useState("all");
  console.log(genreState);
  function changeGenre(genre) {
    setGenreState(genre);
  }
  function changeCurtainContentState(content) {
    setSelectedContent(content);
    setCurtainState(myData.filter((data) => data.genre === "project"));
  }
  function PortoData({ lightMode, genre }) {
    function CurtainContent({ content }) {
      const [animationState, setAnimation] = useState(false);
      const skillList = content.theme.map((skill, index) => {
        return (
          <li
            className={`py-[4px] px-3 m-1 rounded-md ${
              lightMode ? "bg-Pink600 text-[#000000]" : "bg-Platinum "
            }`}
            key={index}
          >
            {skill}
          </li>
        );
      });
      setTimeout(() => {
        setAnimation(true);
      }, 100);
      function closeNav() {
        setCurtainState(false);
      }
      return (
        <>
          <div
            className="overlay w-full h-full fixed z-[999] top-0 right-0"
            onClick={closeNav}
          ></div>
          <div
            className={`z-[9999] absolute overflow-scroll overflow-x-hidden right-0 top-0 pointer-events-auto bg-RaisinBlack w-0 h-full Phone:w-full ${
              animationState ? "curtain-content" : ""
            } ${lightMode ? "bg-[#3f63c7]" : ""}`}
          >
            <div className={`w-[95%] mx-auto `}>
              <div className="flex justify-between my-2 mx-4 text-Platinum">
                <p onClick={closeNav} className="cursor-pointer text-[1.2rem]">
                  <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
                </p>
                <p
                  onClick={closeNav}
                  className="cursor-pointer hover:underline"
                >
                  Close Here
                </p>
              </div>
              <div className="overflow-auto  ml-[5%]">
                <p
                  className={`my-2 font-bolder ${
                    lightMode ? "aa" : "text-Platinum tracking-wide"
                  } `}
                >
                  <i class="fa fa-level-down mr-3" aria-hidden="true"></i>
                  Title
                </p>
                <p className="text-Platinum font-bold">{content.titleName}</p>
                <p
                  className={`my-2 font-bolder ${
                    lightMode ? "aa" : "text-Platinum tracking-wide"
                  }`}
                >
                  <i class="fa fa-bookmark mr-3" aria-hidden="true"></i>
                  Description
                </p>
                <p className="text-White">{content.longDesc}</p>
                <p
                  className={`my-2 font-bolder ${
                    lightMode ? "aa" : "text-Platinum tracking-wide"
                  }`}
                >
                  <i class="fa fa-ellipsis-v mr-3" aria-hidden="true"></i>
                  Content
                </p>
                <ul className="flex flex-wrap">{skillList}</ul>
                <p
                  className={`my-2 font-bolder ${
                    lightMode ? "aa" : "text-Platinum tracking-wide"
                  }`}
                >
                  <i class="fa fa-globe mr-3" aria-hidden="true"></i>
                  Link
                </p>
                <a
                  href={content.url}
                  className={`hover:underline text-Platinum`}
                >
                  {content.url}
                </a>
              </div>
            </div>

            <div className="relative">
              {content.genre === "myread" && (
                <>
                  <p className="mt-5 mb-14  mx-auto text-center text-Platinum font-bold">
                    Note: this is not my blog i do not own this
                  </p>
                </>
              )}
              <a href={`${content.url}`} target="_blank">
                <div
                  className={`w-[25em] h-14 fixed bottom-0 flex items-center justify-center ${
                    lightMode ? "bg-Pink600" : "bg-SteelBlue"
                  } text-center Phone:w-full`}
                >
                  <p className=" text-xl">
                    <i class="fa fa-external-link mr-4" aria-hidden="true"></i>
                    Go To Website
                  </p>
                </div>
              </a>
            </div>
          </div>
        </>
      );
    }

    return myData.map((content, index) => {
      let genreFilter = content.genre === genreState;
      const skillSet = content.theme.map((skill, index) => {
        return (
          <>
            <li
              key={index}
              className={`Phone:px-[10px] text-[11px] Phone:py-[4px] desktop:px-[12px] dekstop:py-[5px] rounded-md mx-[2px] my-[3px] ${
                lightMode
                  ? "bg-Onyx text-Pink100"
                  : "bg-Platinum text-DarkBlueText"
              }`}
            >
              {skill}
            </li>
          </>
        );
      });
      if (myData.length >= 1 && genreState === "all") {
        return (
          <>
            <div
              key={index}
              className={`content-porto relative w-[90%] h-[15em] mx-auto px-[1.4em] py-[1.2em] my-2 flex items-end rounded-lg border-b-RaisinBlack border-[2px] overflow-hidden bg-no-repeat cursor-pointer break-inside-avoid`}
              onClick={() => changeCurtainContentState(content)}
            >
              <img
                src={`${require("../assets/images/data/" + content.img)}`}
                alt=""
                srcset=""
                className="w-full h-full left-0 top-0 absolute"
                style={{ objectPosition: "center center" }}
              />
              <div className="content-slate w-[90%] ">
                <h3 className="">{content.titleName}</h3>
                <p className="font-light">{content.description}</p>
                <ul className="flex flex-wrap font-light">{skillSet}</ul>
              </div>
            </div>
            {curtainContentState && selectedContent !== null && (
              <CurtainContent content={selectedContent} lightMode={lightMode} />
            )}
          </>
        );
      } else if (genreFilter) {
        return (
          <>
            <div
              key={index}
              className={`content-porto relative w-[90%] h-[15em] mx-auto px-[1.4em] py-[1.2em] my-2 flex items-end rounded-lg border-b-RaisinBlack border-[2px] overflow-hidden bg-no-repeat cursor-pointer break-inside-avoid`}
              onClick={() => changeCurtainContentState(content)}
            >
              <img
                src={`${require("../assets/images/data/" + content.img)}`}
                alt=""
                srcset=""
                className="w-full h-full left-0 top-0 absolute"
                style={{ objectPosition: "center center" }}
              />
              <div className="content-slate w-[90%] ">
                <h3 className="">{content.titleName}</h3>
                <p className="font-light">{content.description}</p>
                <ul className="flex flex-wrap font-light">{skillSet}</ul>
              </div>
            </div>
            {curtainContentState && selectedContent !== null && (
              <CurtainContent content={selectedContent} lightMode={lightMode} />
            )}
          </>
        );
      }
    });
  }

  function PortofolioComp({ lightMode, showMenu, isMobile }) {
    return (
      <>
        <div
          className={`profile flex columns mx-auto container h-fit w-[80%] `}
        >
          <div
            className={`font-Poppins w-[800px] mx-auto  ${
              lightMode ? "text-DarkBlueText" : ""
            }`}
          >
            <h1 className={`text-center`}>Portofolio</h1>
            <div className={`text-center`}>
              <button
                className={`text-center mx-3 ${lightMode ? "border-b-RaisinBlack" : "border-b-DarkPink"} ${genreState==='all'?'border-b pb-[2px]':''}`}
                onClick={() => changeGenre("all")}
              >
                all
              </button>
              <button
                className={`text-center mx-3 ${lightMode ? "border-b-RaisinBlack" : "border-b-DarkPink"} ${genreState==='myread'?'border-b pb-[2px]':''}`}
                onClick={() => changeGenre("myread")}
              >
                My Reads
              </button>
              <button
                className={`text-center mx-3 ${lightMode ? "border-b-RaisinBlack" : "border-b-DarkPink"} ${genreState==='project'?'border-b pb-[2px]':''}`}
                onClick={() => changeGenre("project")}
              >
                My Project
              </button>
            </div>
            <PortoData lightMode={lightMode} />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <PageNormal
        content={(props) => <PortofolioComp {...props} />}
      ></PageNormal>
    </>
  );
}

export default PortofolioProt;

import React from "react";
import NavBar from "../component/NavBar";
import "../styles/root.css";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import PageNormal from "../component/page";
import { myData } from "../utils/portoData";
import "../styles/portofolio.css";
class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      curtainState: false,
    };
    this.HandleResize = this.HandleResize.bind(this);
    this.setCurtain = this.setCurtain.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.HandleResize);
    this.HandleResize();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.HandleResize);
  }
  HandleResize() {
    const windowWidth = window.innerWidth;
    const isMobile = windowWidth <= 700;
    this.setState({ isMobile: !isMobile });
    this.setState({ showMenu: !isMobile });
  }
  setCurtain(props){
    function test(){
      this.setState({ curtainState: true });
    }
    
  }
  render() {
    const { curtainState } = this.state;

    function PortoData({ lightMode }) {
      return myData.map((content, index) => {
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
        function CurtainContent() {
          const elementCurtainContent = document.querySelector(".curtain-content");
          console.log("nyambung");
          console.log(curtainState);
          function closeNav() {
            elementCurtainContent.setAttribute("class", "close");
          }
          return (
            <>
              <div className="curtain-content fixed inset-0 right-0 top-0 z-[1] bg-RaisinBlack w-[400px]">
                <div className="w-full h-full Phone:w-full">
                  <p onClick={closeNav}>Close Here</p>
                  <p>{content.titleName}</p>
                </div>
              </div>
            </>
          );
        }
        if (myData.length >= 1) {
          return (
            <>
              <div
                key={index}
                className="content-porto relative w-[90%] h-[15em] px-[1.4rem] py-[1.2rem] flex items-end rounded-lg border-b-RaisinBlack border-[2px] overflow-hidden bg-no-repeat cursor-pointer break-inside-avoid"
                onClick={() => CurtainContent()}
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
            </>
          );
        }
      });
    }

    function PortofolioComp({ lightMode, showMenu, isMobile }) {
      return (
        <>
          <div
            className={`profile columns-auto mx-auto container flex items-center h-fit w-[80%] `}
          >
            <div
              className={`font-Poppins w-[800px] mx-auto flex flex-row flex-wrap justify-center ${
                lightMode ? "text-DarkBlueText" : ""
              }`}
            >
              <h1>Portofolio</h1>
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
}
export default Portfolio;

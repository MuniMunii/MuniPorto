import React from "react";
import NavBar from "../component/NavBar";
import "../styles/root.css";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import PageNormal from "../component/page";
import { myData } from "../utils/portoData";
class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
    };
    this.HandleResize = this.HandleResize.bind(this);
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
  render() {
    function PortoData({lightMode}) {
      return myData.map(content=>{
      const skillSet=content.theme.map((skill,index)=>{
        <li key={index} className={`px-[12px] py-[5px] rounded-md ${lightMode?"bg-Onyx text-Pink100":"bg-Platinum text-DarkBlueText"}`}>{skill}</li>
      })
      return (
        <>
        <div className={`relative w-[14em] h-[15em] cursor-pointer border-[2px] border-b-RaisinBlack hover:shadow-inner`} style={{
          backgroundImage: `url(${require("../assets/images/data/"+content.img+".png")})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="hidden hover:visible">
            <h1>{content.titleName}</h1>
            <p>{content.description}</p>
            <ul className="flex flex-row">{skillSet}</ul>
          </div>
        </div>
        </>
      )
    })}

    function PortofolioComp({lightMode,showMenu,isMobile}) {
      return (
        <>
        <div
            className={`profile columns-auto mx-auto container flex items-center h-fit w-[80%] `}
          >
            <div className={`font-sans w-wrapper mx-auto flex flex-row flex-wrap ${lightMode?'text-DarkBlueText':''}`}>
              <PortoData lightMode={lightMode}/>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
      <PageNormal content={(props)=><PortofolioComp {...props}/>}></PageNormal>
      </>
    );
  }
}
export default Portfolio;

import React from "react";
import NavBar from "../component/NavBar";
import "../styles/root.css";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import PageNormal from "../component/page";
import { myData } from "../utils/portoData";
import "../styles/portofolio.css"
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
      return myData.map((content,index)=>{
      const skillSet=content.theme.map((skill,index)=>{
        return(
          <>
          <li key={index} className={`Phone:px-[8px] Phone:py-[4px] desktop:px-[12px] dekstop:py-[5px] rounded-md mx-[2px] my-[3px] ${lightMode?"bg-Onyx text-Pink100":"bg-Platinum text-DarkBlueText"}`}>{skill}</li>
          </>
        )
      })
      if(myData.length>=1){
        if (index %2===0) {
          return(<>
            <div key={index} className={`relative w-[90%] h-[15em] mt-2 cursor-pointer border-[2px] rounded-t-lg border-b-RaisinBlack Phone:text-[0.9rem] desktop:text-[1.1rem] hexa`} style={{
              backgroundImage: `url(${require("../assets/images/data/"+content.img)})`,
              backgroundSize: '100% 100%',
              backgroundRepeat:'no-repeat',
              backgroundPosition: 'center'
            }}>
              <div className="opacity-0  w-full h-full m-0 absolute transition hover:opacity-100 hover:bg-[rgb(0,0,0)]/[.59]">
                <h1>{content.titleName}</h1>
                <p>{content.description}</p>
                <ul className="flex flex-row flex-wrap">{skillSet}</ul>
              </div>
            </div>
            </>)
        }
        else if(index %2===1){
          return(<>
            <div key={index} className={`relative w-[90%] h-[15em] mt-2 mb-3 cursor-pointer border-[2px] rounded-b-lg border-b-RaisinBlack Phone:text-[0.9rem] desktop:text-[1.1rem]`} style={{
              backgroundImage: `url(${require("../assets/images/data/"+content.img)})`,
              backgroundSize: '100% 100%',
              backgroundRepeat:'no-repeat',
              backgroundPosition: 'center'
            }}>
              <div className="opacity-0  w-full h-full m-0 absolute transition hover:opacity-100 hover:bg-[rgb(0,0,0)]/[.59]">
                <h1>{content.titleName}</h1>
                <p>{content.description}</p>
                <ul className="flex flex-row flex-wrap">{skillSet}</ul>
              </div>
            </div>
            </>)
        }
      }
      
    })}

    function PortofolioComp({lightMode,showMenu,isMobile}) {
      return (
        <>
        <div
            className={`profile columns-auto mx-auto container flex items-center h-fit w-[80%] `}
          >
            <div className={`font-Poppins w-[800px] mx-auto flex flex-row flex-wrap justify-center ${lightMode?'text-DarkBlueText':''}`}>
              <h1>Portofolio</h1>
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

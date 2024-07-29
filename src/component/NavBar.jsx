import React from "react";
import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "../styles/Navbar.css";
import "../lib/font-awesome-4.7.0/css/font-awesome.min.css";
import LogoWeb from "../assets/images/Logo-Muni-Porto.png";
import { setThemes } from "../utils/themes";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.HandleResize = this.HandleResize.bind(this);
    this.ShowNavList = this.ShowNavList.bind(this);
    this.changeThemeMode = this.changeThemeMode.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.HandleResize);
    this.HandleResize();
    const NavlinkElements = document.querySelectorAll(".nav-link");
    const MenuElement = document.querySelector(".menu-bar");
    let NavLinkElementClassWillMount = () => {
      const StickyClass = document.querySelector(".sticky");
      if (NavlinkElements) {
        MenuElement.addEventListener("click", (event) => {
          event.stopPropagation();
          event.preventDefault();
          NavlinkElements.forEach((e) => {
            e.classList.toggle("hide");
          });
        });
        const hideMenu = () => {
          const MatchWindow = window.matchMedia("(max-width:700px)");
          const toggleMedia = () => {
            if (MatchWindow.matches) {
              MenuElement.classList.remove("hide");
              StickyClass.classList.remove("sticky");
              NavlinkElements.forEach((e) => {
                e.classList.add("hide");
              });
            } else {
              MenuElement.classList.add("hide");
              StickyClass.classList.add("sticky");
              NavlinkElements.forEach((e) => {
                e.classList.remove("hide");
              });
            }
          };
          toggleMedia();
          MatchWindow.addListener(toggleMedia);
        };
        hideMenu();
      } else {
        setTimeout(NavLinkElementClassWillMount, 100);
      }
    };
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.HandleResize);
    const MenuElement = document.querySelector(".menu-bar");
    const NavlinkElements = document.querySelectorAll(".nav-link");
    const MatchWindow = window.matchMedia("(max-width:700px)");
    const handleClick = (event) => {
      // eslint-disable-next-line no-restricted-globals
      event.stopPropagation();
      event.preventDefault();
      NavlinkElements.forEach((e) => {
        e.classList.toggle("hide");
      });
    };

    const toggleMedia = () => {
      if (MatchWindow.matches) {
        MenuElement.classList.remove("hide");
        NavlinkElements.forEach((e) => {
          e.classList.add("hide");
        });
      } else {
        MenuElement.classList.add("hide");
        NavlinkElements.forEach((e) => {
          e.classList.remove("hide");
        });
      }
    };
    MenuElement.removeEventListener("click", handleClick);
    MatchWindow.removeListener(toggleMedia);
  }
  HandleResize() {
    const WindowWidth = window.innerWidth;
    const isMobile = WindowWidth <= 700;
    if (isMobile) {
      this.setState({ isMobile: isMobile, showMenu: false });
    } else {
      this.setState({ showMenu: !isMobile });
    }
  }
  changeThemeMode(){
    const { showMenu } = this.props;
    if (!showMenu) {
      const toggleChangeForBug = document.querySelector('.button-theme');
      if (toggleChangeForBug) {
        toggleChangeForBug.classList.toggle('hidden');
      }
    }
  //   this.setState(({lightMode})=>({
  //     lightMode:localStorage.getItem('theme')===lightMode?'dark-theme':'light-theme'
  //   }),
  // ()=>{localStorage.setItem("theme",this.state.lightMode)})
  const CURRENT_THEME=localStorage.getItem('theme')
    if(CURRENT_THEME==='dark-theme'){
      setThemes('light-theme')
      console.log("light-theme");
    }else{
      setThemes('dark-theme')
      console.log("dark-theme");
    }
  }
  ShowNavList() {
    const toggleHideElements = document.querySelectorAll(".toggle-hide");
    toggleHideElements.forEach((element) => {
      element.classList.toggle("hidden");
    });
  }
  render() {
    const { showMenu,lightMode} = this.props;
    function DayLogo(){
      return(
        <>
        <div className={`${lightMode?'text-DarkBlueText':'text-White'}`}>
        <svg width="30" height="30" id="light-icon" >
      <circle cx="15" cy="15" r="6" fill="currentColor" />
      <line
        id="ray"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        x1="15"
        y1="1"
        x2="15"
        y2="4"
      ></line>
    
      <use href="#ray" transform="rotate(45 15 15)" />
      <use href="#ray" transform="rotate(90 15 15)" />
      <use href="#ray" transform="rotate(135 15 15)" />
      <use href="#ray" transform="rotate(180 15 15)" />
      <use href="#ray" transform="rotate(225 15 15)" />
      <use href="#ray" transform="rotate(270 15 15)" />
      <use href="#ray" transform="rotate(315 15 15)" />
    </svg>
        </div>
</>
      )
    }
    function DarkLogo(){
      return(
        <>
            <svg width="30" height="30" id="dark-icon">
        <path
          fill="currentColor"
          d="
          M 23, 5
          A 12 12 0 1 0 23, 25
          A 12 12 0 0 1 23, 5"
        />
      </svg></>
      )
    }
    return (
      <>
        <div className="flex justify-center align-middle">
          <div className="navbar-class w-med Phone:text/[20px] desktop:text-[24px]">
            
            <p
              className={`menu-bar justify-center flex ${
                showMenu ? "hidden" : ""
              }`}
              onClick={this.ShowNavList}
            >
              <i className="fa fa-bars menu-logo"></i>
            </p>
            <div
              className={` ${
                showMenu
                  ? "flex flex-col fixed justify-self-center px-3"
                  : "navbar-list relative"
              }`}
            >
            <button className={`button-theme w-fit toggle-hide mr-4 ${showMenu? "": "hidden"}`} onClick={this.changeThemeMode}>
              {lightMode?<DarkLogo/> :<DayLogo/>}
            </button>
              <NavLink
                to="/"
                className={`toggle-hide nav-link w-fit h-fit ${showMenu ? "" : "hidden"}  ${lightMode?"text-RaisinBlack dark":'light'}`}
              >
                Home
              </NavLink>
              <NavLink
                to="/profile"
                className={`toggle-hide nav-link w-fit h-fit ${showMenu ? "" : "hidden"}  ${lightMode?"text-RaisinBlack dark":'light'}`}
              >
                Profile
              </NavLink>
              <NavLink
                to="/portofolio"
                className={`toggle-hide nav-link w-fit h-fit ${showMenu ? "" : "hidden"}  ${lightMode?"text-RaisinBlack dark":'light'}`}
              >
                Portfolio
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default NavBar;

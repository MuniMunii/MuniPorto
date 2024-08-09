import React from "react";
import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "../styles/Navbar.css";
import "../lib/font-awesome-4.7.0/css/font-awesome.min.css";
import { setThemes } from "../utils/themes";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.ShowNavList = this.ShowNavList.bind(this);
    this.changeThemeMode = this.changeThemeMode.bind(this);
  }
  componentDidMount() {
    const NavlinkElements = document.querySelectorAll(".nav-link");
    const MenuElement = document.querySelector(".menu-bar");
    let NavLinkElementClassWillMount = () => {
      const StickyClass = document.querySelector(".sticky");
      if (NavlinkElements) {
        MenuElement.addEventListener("click", (event) => {
          NavlinkElements.forEach((e) => {
            e.classList.toggle("hide");
          });
        });
        const hideMenu = () => {
          const MatchWindow = window.matchMedia("(max-width:700px)");
          const toggleMedia = () => {
            if (MatchWindow.matches) {
              MenuElement.classList.remove("hidden");
              StickyClass.classList.remove("sticky");
              NavlinkElements.forEach((e) => {
                e.classList.add("hidden");
              });
            } else {
              MenuElement.classList.add("hidden");
              StickyClass.classList.add("sticky");
              NavlinkElements.forEach((e) => {
                e.classList.remove("hidden");
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
      NavlinkElements.forEach((e) => {
        e.classList.toggle("hidden");
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
  changeThemeMode(){
    const { showMenu } = this.props;
    if (!showMenu) {
      const toggleChangeForBug = document.querySelector('.button-theme');
      if (toggleChangeForBug) {
        toggleChangeForBug.classList.toggle('hidden');
      }
    }
  const CURRENT_THEME=localStorage.getItem('theme')
    if(CURRENT_THEME==='dark-theme'){
      setThemes('light-theme')
    }else{
      setThemes('dark-theme')
    }
  }
  ShowNavList() {
    const MatchWindow = window.matchMedia("(max-width:700px)");
    if (MatchWindow.matches) {
      const toggleHideElements = document.querySelectorAll(".toggle-hide");
      toggleHideElements.forEach((element) => {
        element.classList.toggle('hidden')
      });
    }
  }
  render() {
    const { showMenu, lightMode} = this.props;
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
        <div className="flex justify-center align-middle ">
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
            <button className={`toggle-hide button-theme w-fit mr-4 ${showMenu? "": "hidden"}`} onClick={this.changeThemeMode} >
              
              {lightMode?<DarkLogo/> :<DayLogo/>}
            </button>
              <NavLink
                to="/"
                className={({ isActive }) => 
                  `toggle-hide nav-link w-fit h-fit 
                  ${isActive?'cursor-default pointer-events-none':''}
                  ${isActive && lightMode ? "bg-LightActiveModeText pb-[1px] border-b-[3px]" : ""} 
                  ${isActive && !lightMode ? "bg-DarkActiveModeText pb-[1px] border-b-[3px]" : ""}
                  ${showMenu ? "" : "hidden"}  
                  ${lightMode ? "text-RaisinBlack dark" : "light"}`
              }
                onClick={this.ShowNavList}
                
              >
                Home
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive }) => 
                  `toggle-hide nav-link w-fit h-fit 
                  ${isActive?'cursor-default pointer-events-none':''}
                  ${isActive && lightMode ? "bg-LightActiveModeText pb-[1px] border-b-[3px]" : ""} 
                  ${isActive && !lightMode ? "bg-DarkActiveModeText pb-[1px] border-b-[3px]" : ""}
                  ${showMenu ? "" : "hidden"}  
                  ${lightMode ? "text-RaisinBlack dark" : "light"}`
              }
                onClick={this.ShowNavList}
              >
                Profile
              </NavLink>
              <NavLink
                to="/portofolio"
                className={({ isActive }) => 
                  `toggle-hide nav-link w-fit h-fit 
                  ${isActive?'cursor-default pointer-events-none':''}
                  ${isActive && lightMode ? "bg-LightActiveModeText pb-[1px] border-b-[3px]" : ""} 
                  ${isActive && !lightMode ? "bg-DarkActiveModeText pb-[1px] border-b-[3px]" : ""}
                  ${showMenu ? "" : "hidden"}  
                  ${lightMode ? "text-RaisinBlack dark" : "light"}`
              }
                onClick={this.ShowNavList}
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

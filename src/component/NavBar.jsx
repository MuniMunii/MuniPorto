import React from "react";
import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "../styles/Navbar.css";
import "../lib/font-awesome-4.7.0/css/font-awesome.min.css";
import LogoWeb from "../assets/images/Logo-Muni-Porto.png";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightMode: false
    };
    this.HandleResize = this.HandleResize.bind(this);
    this.ShowMenuBar = this.ShowMenuBar.bind(this);
    this.ShowNavList = this.ShowNavList.bind(this);
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
  ShowMenuBar() {
    this.setState((prevstate) => {
      return { showMenu: !prevstate.showMenu };
    });
  }
  ShowNavList() {
    const NavlinkElements = document.querySelectorAll(".toggle-hide");
    NavlinkElements.forEach((element) => {
      element.classList.toggle("hidden");
    });
  }
  render() {
    const { showMenu, isMobile } = this.props;
    const { lightMode } = this.state;
    return (
      <>
        <div className="flex justify-center align-middle">
          <div className="navbar-class w-med text/[20px]">
            
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
              <button className={`toggle-hide mr-4 ${showMenu?'':'hidden'}`}>
              {!lightMode && (
                <svg width="30" height="30">
                <circle cx="15" cy="15" r="6" fill="currentColor" />
              
                <line
                  id="ray"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
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
              )}
            </button>
              <NavLink
                to="/"
                className={`toggle-hide nav-link w-fit h-fit ${showMenu ? "" : "hidden"}`}
              >
                Home
              </NavLink>
              <NavLink
                to="/profile"
                className={`toggle-hide nav-link w-fit h-fit ${showMenu ? "" : "hidden"}`}
              >
                Profile
              </NavLink>
              <NavLink
                to="/portofolio"
                className={`toggle-hide nav-link w-fit h-fit ${showMenu ? "" : "hidden"}`}
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

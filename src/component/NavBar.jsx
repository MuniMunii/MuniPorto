import React from "react";
import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "../styles/Navbar.css";
import "../lib/font-awesome-4.7.0/css/font-awesome.min.css";
import LogoWeb from "../assets/images/Logo-Muni-Porto.png";
class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      isMobile: false,
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
    const NavlinkElements = document.querySelectorAll(".nav-link");
    NavlinkElements.forEach((element) => {
      element.classList.toggle("hidden");
    });
  }
  render() {
    const { showMenu, isMobile } = this.props;
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
                showMenu ? "flex flex-col fixed justify-self-center" : "navbar-list row"
              }`}
            >
              <NavLink
                to="/"
                className={`nav-link ${showMenu ? "" : "hidden"}`}
              >
                Home
              </NavLink>
              <NavLink
                to="/profile"
                className={`nav-link ${showMenu ? "" : "hidden"}`}
              >
                Profile
              </NavLink>
              <NavLink
                to="/portofolio"
                className={`nav-link ${showMenu ? "" : "hidden"}`}
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

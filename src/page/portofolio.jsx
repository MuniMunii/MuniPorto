import React from "react";
import NavBar from "../component/NavBar";
import "../styles/root.css";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import PageNormal from "../component/page";
class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      isMobile: true,
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
    const { showMenu, isMobile } = this.state;
    function PortofolioComp() {
      return <>porto</>;
    }
    return (
      <>
      <PageNormal content={<PortofolioComp/>}></PageNormal>
      </>
    );
  }
}
export default Portfolio;

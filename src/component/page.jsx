import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

class PageNormal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: true,
      isMobile: true,
      isLandscape: false,
      lightMode:localStorage.getItem('theme')==="light-theme"
    };
    this.resizeScreen = this.resizeScreen.bind(this);
    this.sycnWithTheme=this.sycnWithTheme.bind(this)
  }
  componentDidMount() {
    this.resizeScreen();
    window.addEventListener("resize", this.resizeScreen);
    window.addEventListener("storage", this.sycnWithTheme);
  }
  componentWillUnmount() {
    this.resizeScreen();
    window.removeEventListener("resize", this.resizeScreen);
    window.removeEventListener("storage", this.sycnWithTheme);
  }
  sycnWithTheme=()=>{
    this.setState({
        lightMode:localStorage.getItem('theme')==="light-theme"
    })
  }
  resizeScreen() {
    const WindowScreenMobile = window.matchMedia("(max-width:700px)").matches;
    const IsLandscapes = window.matchMedia("(orientation:landscape)").matches;
    this.setState({ isLandscape: IsLandscapes });
    this.setState({ isMobile: WindowScreenMobile });
    // kalo isMobile false showmenu akan jadi false
    this.setState({ showMenu: !WindowScreenMobile });
  }
  render() {
    const { showMenu, isLandscape, isMobile,lightMode} = this.state;
    const { content} = this.props;
    console.log(`${lightMode} is active`);
    return (
      <>
        <div
          className={`${
            showMenu ? " flex flex-row align-middle" : "column-auto "
          } fullscreen`}
        >
          <div
            className={`container-content overflow-auto h-fit ${
              showMenu ? "row" : "column"
            }`}
          >
            <NavBar showMenu={showMenu} lightMode={lightMode}/>
            {content({ showMenu, isMobile, isLandscape, lightMode })}
          </div>
        </div>
      </>
    );
  }
}

export default PageNormal;

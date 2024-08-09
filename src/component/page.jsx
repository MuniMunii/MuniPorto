import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
function PageComp({ content ,lightMode }) {
  const [isMobile, setIsMobile] = useState(true);
  // showMenu True karna waktu production langsung buat Mode Web untuk Pc
  // showMenu True because when i first made this i was working for pc client first
  const [showMenu, setShowMenu] = useState(true);
  const [isLandscape, setLandscape] = useState(false);
  function resizeScreen() {
    const WindowScreenMobile = window.matchMedia("(max-width:700px)").matches;
    const IsLandscapesWindow = window.matchMedia(
      "(orientation:landscape)"
    ).matches;
    setLandscape(IsLandscapesWindow);
    setIsMobile(WindowScreenMobile);
    setShowMenu(!WindowScreenMobile);
  }
  useEffect(() => {
    resizeScreen();
    window.addEventListener("resize", resizeScreen);
    return () => {
      window.removeEventListener("resize", resizeScreen);
    };
  }, []);
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
          <NavBar showMenu={showMenu} lightMode={lightMode} isMobile={isMobile}  />
          {content({ showMenu, isMobile, isLandscape , lightMode})}
        </div>
      </div>
    </>
  );
}
export default PageComp;
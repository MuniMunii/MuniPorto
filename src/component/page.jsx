import React, { useEffect, useState, useSyncExternalStore } from "react";
import NavBar from "./NavBar";
function PageComp({ content }) {
  const [isMobile, setIsMobile] = useState(true);
  const [showMenu, setShowMenu] = useState(true);
  const [isLandscape, setLandscape] = useState(false);
  const [lightMode, setLightMode] = useState(
    localStorage.getItem("theme") === "light-theme"
  );
  function syncWithTheme() {
    setLightMode(localStorage.getItem("theme") === "light-theme");
  }
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
    const initialTheme = localStorage.getItem("theme");
    if (initialTheme) {
      document.documentElement.className = initialTheme;
      document.body.className =
        initialTheme === "light-theme" ? "bg-LightModeBody" : "bg-DarkModeBody";
    }
    resizeScreen();
    window.addEventListener("resize", resizeScreen);
    window.addEventListener("storage", syncWithTheme);
    return () => {
      window.removeEventListener("resize", resizeScreen);
      window.removeEventListener("storage", syncWithTheme);
    };
  }, []);
  useEffect(() => {
    const currentTheme = lightMode ? "light-theme" : "dark-theme";
    document.documentElement.className = currentTheme;
    document.body.className = lightMode
      ? "bg-LightModeBody"
      : "bg-DarkModeBody";
  }, [lightMode]);
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
          <NavBar showMenu={showMenu} lightMode={lightMode} />
          {content({ showMenu, isMobile, isLandscape, lightMode })}
        </div>
      </div>
    </>
  );
}
export default PageComp;

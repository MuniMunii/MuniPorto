import React from "react";
import PortofolioComp from "../component/portofolioComp";
import { useEffect } from "react";
function PortofolioProt({lightMode,showMenu,isMobile}) {
  useEffect(()=>{
    document.title='Portofolio | Muniporto'
  },[])
  return (
    <>
    <PortofolioComp lightMode={lightMode} showMenu={showMenu} isMobile={isMobile}/>
    </>
  );
}

export default PortofolioProt;

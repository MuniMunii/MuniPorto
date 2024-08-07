import React, { useEffect } from "react";
import ResumeComp from "../component/resumeComp";
function ResumePage({lightMode , showMenu , isMobile}) {
  useEffect(()=>{
    document.title='Resume | Muniporto'
  },[])
  return <ResumeComp lightMode={lightMode} showMenu={showMenu} isMobile={isMobile} />;
}
export default ResumePage;

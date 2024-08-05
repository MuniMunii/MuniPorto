import React from "react";
import "../lib/font-awesome-4.7.0/css/font-awesome.min.css";
import '../styles/Footer.css'
import '../styles/root.css'
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isMobile } = this.props;
    function FooterComp(){
      return (
        <div className={`mt-6 w-fit ${isMobile?'absolute-logo-list':'flex flex-row'} `}>
          <div className="logo-div">
            <a href="#" className={`${isMobile?'text-LightPink':'text-DarkBlueText hover:text-LightPink ease-in duration-TwoMilliSecond'} no-underline text-[24px] opacity-100`}>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
          <div className="logo-div">
            <a href="https://www.linkedin.com/in/ramzi-akbar-ramadhan-b8b05a243/" className={`${isMobile?'text-LightPink':'text-DarkBlueText hover:text-LightPink ease-in duration-TwoMilliSecond'} no-underline text-[24px] opacity-100 mx-4`}>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
          <div className="logo-div">
            <a href="https://github.com/MuniMunii" className={`${isMobile?'text-LightPink':'text-DarkBlueText hover:text-LightPink ease-in duration-TwoMilliSecond'} no-underline text-[24px] opacity-100`}>
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      )
      
    }
    return (
      <>
        <FooterComp isMobile={isMobile}/>
      </>
    );
  }
}
export default Footer;

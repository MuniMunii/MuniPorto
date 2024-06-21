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
        <div className={`Display ${isMobile?'absolute-logo-list':'flex flex-row'} w-fit`}>
          <div className="logo-div">
            <a href="#" className="logo-link">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
          <div className="logo-div">
            <a href="#" className="logo-link">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
          <div className="logo-div">
            <a href="#" className="logo-link">
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

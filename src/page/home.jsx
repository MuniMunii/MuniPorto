import React from "react";
import HomeProfileComp from "../component/homeComp";
class Home extends React.Component {
  constructor() {
    super();
  }
  componentDidMount(){
    document.title='Home | Muniporto'
  }
  render() {
    const {lightMode,showMenu,isMobile}=this.props
    return (
      <>
        <HomeProfileComp lightMode={lightMode} showMenu={showMenu} isMobile={isMobile}/>
      </>
    );
  }
}
export default Home;
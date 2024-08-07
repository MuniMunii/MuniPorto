import React from "react";
import ProfileComp from "../component/profileComp";
class Profile extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    document.title='Profile | Muniporto'
  }
  render() {
    const {lightMode,showMenu,isMobile}=this.props
    return (
      <>
      <ProfileComp lightMode={lightMode} showMenu={showMenu} isMobile={isMobile}/>
      </>
    );
  }
}
export default Profile;
import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

class PageNormal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showMenu:true,
            isMobile:true,
            isLandscape:false
        }
        this.resizeScreen=this.resizeScreen.bind(this)
    }
    componentDidMount(){
        this.resizeScreen()
        window.addEventListener('resize',this.resizeScreen)
    }
    componentWillUnmount(){
        this.resizeScreen();
        window.removeEventListener('resize',this.resizeScreen)
    }
    resizeScreen(){
        const WindowScreenMobile=window.matchMedia('(max-width:700px)').matches
        const IsLandscapes=window.matchMedia('(orientation:landscape)').matches
        this.setState({isLandscape:IsLandscapes})
        this.setState({ isMobile: WindowScreenMobile});
        // kalo isMobile false showmenu akan jadi false
        this.setState({ showMenu: !WindowScreenMobile });
    }
    render(){
        const {showMenu,isLandscape,isMobile}=this.state
        const {content}=this.props
        return(
            <>
            <div className={`${
            showMenu ? " flex flex-row align-middle" : "column-auto "} fullscreen`}>
                <div className={`container-content overflow-auto h-fit ${showMenu?"row":"column"}`}>
                    <NavBar showMenu={showMenu}/>
                {content({showMenu, isMobile, isLandscape})}
                </div>
            </div>
            </>
        )
    }
}

export default PageNormal
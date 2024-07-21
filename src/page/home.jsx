import React, { Component } from "react";
import "../styles/home.css";
import "../styles/root.css";
import PageNormal from "../component/page";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Footer from "../component/Footer";

class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    function HomeProfileComp({showMenu,isMobile,isLandscape,lightMode}) {
      const landscapeValue = isLandscape ? "h-fit" : "";
      return (
        <>
          <div
            className={`profile columns-auto mx-auto container flex items-center justify-center  ${landscapeValue} `}
          >
            {/* profile */}
            <div className={`font-Poppins w-wrapper mx-auto flex-col ${lightMode?'text-DarkBlueText':''}`}>
              <h1 className="text-h1Xl font-bolder">HI.</h1>
              <h1 className="text-h1Med font-bold">I'am Ramzi.</h1>
              <p className="font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                voluptas modi nobis quas enim doloribus ipsum ex eveniet sunt
                iure? Inventore dignissimos ea deleniti nisi modi provident quas
                ipsum debitis! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. A velit doloribus blanditiis doloremque!
                Nesciunt blanditiis inventore ea recusandae, harum iste fuga
                consequatur aliquid, magnam, eveniet ducimus quia a nisi facilis
                neque. Qui dolorem eligendi minima beatae officia, repellat quo
                natus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis cupiditate nulla recusandae vero asperiores deleniti,
                ea, accusamus quos in commodi consequatur voluptatem minus,
                veritatis esse autem quisquam possimus rem tempore cum animi
                veniam quasi fugit temporibus! Porro illo voluptas officiis
                tenetur? Et exercitationem dicta deserunt quaerat debitis minus
                eum ratione, totam a nesciunt sint molestias delectus veritatis
                at fugit vitae quas facere quod. Voluptates, veniam. Quod cum
                dicta possimus nostrum accusantium aut, voluptatum ratione
                eveniet accusamus iste, ducimus ipsa ab hic quaerat eos, quas
                fuga sed! Sed quae dolorum ipsa aut, distinctio, nesciunt
                aliquid et omnis fuga qui, molestiae adipisci.
              </p>
              <div
                style={{
                  display: "flex",
                  marginTop: "3px",
                  alignItems: "center",
                }}
                className={`${showMenu ? "" : "margin-navlogo"}`}
              >
                <NavLink to="/profile" className={`link-about ${lightMode?"dark":"light"}`}>
                  See More About Me
                </NavLink>
                <svg
                  className="arrow-right"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
              </div>
              <Footer isMobile={isMobile} />
            </div>
          </div>
        </>
      );
    }

    return (
      <>
        <PageNormal
          content={
            (props)=><HomeProfileComp {...props}/>
          }
        />
      </>
    );
  }
}
export default Home;

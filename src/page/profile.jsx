import React from "react";
import NavBar from "../component/NavBar";
import { NavLink } from "react-router-dom";
import "../styles/root.css";
import "../styles/Profile.css";
import Footer from "../component/Footer";
import PageNormal from "../component/page";
import { list } from "postcss";
class Profile extends React.Component {
  constructor() {
    super();
    this.scrollEffect=this.scrollEffect.bind(this)
  }
  componentDidMount() {
    this.scrollEffect()
  }
  scrollEffect() {
    const callback=function(entries,observer){
      entries.forEach(entry => {
        if (entry.isIntersecting&&!entry.target.classList.contains('AlreadyAnimated')) {
          entry.target.classList.add("animate-fadeIn")
          entry.target.classList.add("AlreadyAnimated")
          observer.unobserve(entry.target)
        }
      });
    }
    const observer=new IntersectionObserver(callback);
    const getListElement=document.querySelectorAll('li')
    getListElement.forEach(function(list){
      list.classList.add("opacity-0")
      observer.observe(list)
    })
  }
  render() {
    const { showMenu, isMobile } = this.props;
    console.log(isMobile);
    function ProfileComp({ showMenu, isMobile }) {
      return (
        <>
          <div
            className={`profile columns-auto mx-auto container flex items-center h-fit `}
          >
            <div className="font-sans w-wrapper mx-auto flex flex-col ">
              <div className={`${isMobile?"mx-[20px]":'about'}`}>
                <h1 className="text-center">ABOUT ME</h1>
                <h2 className="mb-2">Journey</h2>
                <ul className="timeline">
                  <li className="ml-5">
                    <p href="" class="list-title">
                      2021
                    </p>
                    <p class="list-text animate-fadeIn">
                      This was my first year when i learning how to code and
                      interested in programming, By the way i intrested on
                      programming because my brother recommended me to join
                      Bootcamp.
                      <span>
                        <a
                          href="https://www.dicoding.com/academies/120-memulai-pemrograman-dengan-c"
                          class="link-list-span"
                        >
                          Here
                        </a>
                      </span>{" "}
                      and because of that I am interested in programming, and
                      the first language I learned was C. Even though i am a
                      highschooler with an IT Background i am still struggling
                      to learn programming because i really have zero knowledge
                      in programming language. But somehow i still finished the
                      Bootcamp and i took another Bootcamp for JAVA Language in
                      this bootcamp i finally understand the basics of
                      programming like Data Primitives, conditional, Aritmethic
                      operator and etc
                    </p>
                  </li>
                  <li className="ml-5">
                    <div class="title-comp">
                      <p href="" class="list-title">
                        2022
                      </p>
                      <a
                        href="https://github.com/MuniMunii?tab=overview&from=2022-12-01&to=2022-12-31"
                        alt="My-Github Muni-Munii"
                        class="float-right logo-link"
                      >
                        <i class="fa fa-github"></i>
                      </a>
                    </div>

                    <p class="list-text">
                      In this second year, I graduated from Highschool, because
                      I am interested in programming, so i took my University
                      degree with an IT Background (Information Systems/Sistem
                      Informasi) at Universitas Bina Sarana Informatika. in my
                      first year of college, i started learning Python,Data
                      Structure, Algorithm, and how does Computer work with
                      programing languages because I had already learning
                      another languages before so learning this was not that
                      hard and when my college break start, i started learning
                      HTML&CSS and i made my first Github for my Documentation
                    </p>
                  </li>
                  <li className="ml-5">
                    <p href="" class="list-title">
                      2023
                    </p>
                    <p class="list-text">
                      Second year in College, my School started teaching me
                      about Web Development with PHP and Code Igniter Framework
                      i was excited at first because i really like anything
                      about Web programming but it was a little bit hard for me
                      but i still completed this with a good grade and in this
                      year of my college i learning about Databases like mySQL,
                      i learning about Management and Statistic too because my
                      Degree is about bussines mixed with IT Technologies
                    </p>
                  </li>
                  <li className="ml-5">
                    <p href="" class="list-title">
                      2024
                    </p>
                    <p class="list-text">
                      Now Third year in College my school is now focused on
                      teaching about business more rather than programming but i
                      still learning about that and in this year too i started
                      learning React framework
                    </p>
                  </li>
                  <li className="ml-5">
                    <p href="" class="list-title">
                      Currently
                    </p>
                    <p class="list-text">
                      Always learning about web deveploment,database and reading
                      whatever what i find interesting
                    </p>
                  </li>
                </ul>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                  className={`${showMenu ? "" : "margin-navlogo"} mt-4`}
                >
                  <NavLink to="/profile" className="link-about">
                    See More About Me
                  </NavLink>
                  <svg
                    class="arrow-right"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                  </svg>
                </div>
                <Footer isMobile={isMobile} />
              </div>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <PageNormal
          content={(props) => <ProfileComp {...props} />}
        ></PageNormal>
      </>
    );
  }
}
export default Profile;

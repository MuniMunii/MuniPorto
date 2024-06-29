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
    this.scrollEffect = this.scrollEffect.bind(this);
  }
  componentDidMount() {
    this.scrollEffect();
  }
  scrollEffect() {
    const callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains("AlreadyAnimated")
        ) {
          entry.target.classList.add("animate-fadeIn");
          entry.target.classList.add("AlreadyAnimated");
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(callback);
    const getListElement = document.querySelectorAll("li");
    getListElement.forEach(function (list) {
      list.classList.add("opacity-0");
      observer.observe(list);
    });
  }
  render() {
    const { showMenu, isMobile ,lightMode} = this.props;
    function ProfileComp({ showMenu, isMobile,lightMode }) {
      return (
        <>
          <div
            className={`profile columns-auto mx-auto container flex items-center h-fit `}
          >
            <div className={`font-sans w-wrapper mx-auto flex flex-col ${lightMode?'text-DarkBlueText':''}`}>
              <div className={`${isMobile ? "mx-[20px]" : "about"}`}>
                <h1 className="text-center text-3xl">ABOUT ME</h1>
                <div className="part1">
                  <h2 className="mb-2 text-[1.3rem]">Journey</h2>
                  <ul className={`timeline ${lightMode?'light':'dark'}`}>
                    <li className="ml-5">
                      <p
                        href=""
                        className="text-[1.4rem] font-bold  Phone:Phone:text-[1.2rem] text-wrap"
                      >
                        2021
                      </p>
                      <p className="list-text animate-fadeIn">
                        This was my first year when i learning how to code and
                        interested in programming, By the way i intrested on
                        programming because my brother recommended me to join
                        Bootcamp.{" "}
                        <span>
                          <a
                            href="https://www.dicoding.com/academies/120-memulai-pemrograman-dengan-c"
                            className={`no-underline hover:underline ${lightMode?'text-DarkBlueText':'text-LightPink'}`}
                          >
                            Here
                          </a>
                        </span>{" "}
                        and because of that I am interested in programming, and
                        the first language I learned was C. Even though i am a
                        highschooler with an IT Background i am still struggling
                        to learn programming because i really have zero
                        knowledge in programming language. But somehow i still
                        finished the Bootcamp and i took another Bootcamp for
                        JAVA Language in this bootcamp i finally understand the
                        basics of programming like Data Primitives, conditional,
                        Aritmethic operator and etc.
                      </p>
                    </li>
                    <li className="ml-5 mt-3">
                      <div className="title-comp">
                        <p
                          href=""
                          className="text-[1.4rem] font-bold  Phone:Phone:text-[1.2rem] text-wrap"
                        >
                          2022
                        </p>
                        <a
                          href="https://github.com/MuniMunii?tab=overview&from=2022-12-01&to=2022-12-31"
                          alt="My-Github Muni-Munii"
                          className="float-right logo-link"
                        >
                          <i className="fa fa-github"></i>
                        </a>
                      </div>
                      <p className="list-text animate-fadeIn">
                        In this second year, I graduated from Highschool,
                        because I am interested in programming, so i took my
                        University degree with an IT Background (Information
                        Systems/Sistem Informasi) at Universitas Bina Sarana
                        Informatika. in my first year of college, i started
                        learning Python,Data Structure, Algorithm, and how does
                        Computer work with programing languages because I had
                        already learning another languages before so learning
                        this was not that hard and when my college break start,
                        i started learning HTML&CSS and i made my first Github
                        for my Documentation.
                      </p>
                    </li>
                    <li className="ml-5 mt-3">
                      <p
                        href=""
                        className="text-[1.4rem] font-bold  Phone:Phone:text-[1.2rem] text-wrap"
                      >
                        2023
                      </p>
                      <p className="list-text">
                        Second year in College, my School started teaching me
                        about Web Development with PHP and Code Igniter
                        Framework i was excited at first because i really like
                        anything about Web programming but it was a little bit
                        hard for me but i still completed this with a good grade
                        and in this year of my college i learning about
                        Databases like mySQL, i learning about Management and
                        Statistic too because my Degree is about bussines mixed
                        with IT Technologies.
                      </p>
                    </li>
                    <li className="ml-5 mt-3">
                      <p
                        href=""
                        className="text-[1.4rem] font-bold  Phone:Phone:text-[1.2rem] text-wrap"
                      >
                        2024
                      </p>
                      <p className="list-text">
                        Now Third year in College my school is now focused on
                        teaching about business more rather than programming but
                        i still learning about that and in this year too i
                        started learning React framework.
                      </p>
                    </li>
                    <li className="ml-5 mt-3">
                      <p
                        href=""
                        className="text-[1.4rem] font-bold  Phone:Phone:text-[1.2rem] text-wrap"
                      >
                        Currently
                      </p>
                      <p className="list-text">
                        Always learning about web deveploment,database and
                        reading whatever what i find interesting.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="part2 mt-[20px]">
                  <h2 className="mb-2 text-[1.3rem]">My Reads</h2>
                  <ul className={`timeline ${lightMode?'light':'dark'}`}>
                    <li className="ml-5">
                      <a
                        href=""
                        className={`text-[1.4rem] font-bold myread-links w-fit Phone:text-[1.2rem] text-wrap ${lightMode?'light':'dark'}`}
                      >
                        HTML&CSS
                        <span className={`text-sm ${lightMode?'text-DarkBlueText':'text-LightPink'}`}>
                          .Youtube
                        </span>
                      </a>
                      <p>
                        Most of the time i learn HTML&CSS are self-taught, but i
                        always watch him for some tips and trick that really
                        helpfull most of the time and he always have a cool idea
                        for css styling shout out to{" "}
                        <span>
                          <a className={`no-underline hover:underline ${lightMode?'text-DarkBlueText':'text-LightPink'}`}>
                            KevinPowell.
                          </a>
                        </span>
                      </p>
                    </li>
                    <li className="ml-5 mt-3">
                      <a
                        href="https://github.com/Asabeneh/30-Days-Of-JavaScript"
                        className={`text-[1.4rem] font-bold myread-links w-fit Phone:text-[1.2rem] text-wrap ${lightMode?'light':'dark'}`}
                      >
                        JavascriptChallenges
                        <span className={`text-sm ${lightMode?'text-DarkBlueText':'text-LightPink'}`}>.Github</span>
                      </a>
                      <p>
                        Now this is the fun part.This is how i learned the
                        Javascript thanks to{" "}
                        <span>
                          <a
                            href="https://github.com/Asabeneh/30-Days-Of-JavaScript"
                            className={`no-underline hover:underline ${lightMode?'text-DarkBlueText':'text-LightPink'}`}
                          >
                            Asabeneh Yetayeh
                          </a>
                        </span>{" "}
                        ,So the challenges are continous until 30 days (you dont
                        need to cleared it in exact 30 days just need to be
                        consistent because it need a logical thinking when you
                        are learning a programming language), and everytime you
                        completed the challenges, it will goes hard and then in
                        the last week of challenges, you need to build a simple
                        project from what you learned before.
                      </p>
                      <p></p>
                    </li>
                    <li className="ml-5 mt-3">
                      <a
                        href="https://github.com/ryanmcdermott/clean-code-javascript"
                        className={`text-[1.4rem] font-bold myread-links w-fit Phone:text-[1.2rem] text-wrap ${lightMode?'light':'dark'}`}
                      >
                        Writing Clean Code
                        <span className={`text-sm ${lightMode?'text-DarkBlueText':'text-LightPink'}`}>.Github</span>
                      </a>
                      <p>
                        This is where i learned about implemented a clean code
                        can make a easier to read and not only working code but
                        also how to maintain the code for the future if
                        something happen.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="part3 mt-[20px]">
                  <h2 className="mb-2 text-[1.3rem]">Playlist And Other</h2>
                  <ul className={`timeline ${lightMode?'light':'dark'}`}>
                    <li className="ml-5 mt-3">
                      <a
                        href="https://open.spotify.com/playlist/51Lsg8Y6SS9Dxk1wPLbqUO?si=7ce04b2f7b3745a6"
                        className={`text-[1.4rem] font-bold myread-links w-fit Phone:text-[1.2rem] text-wrap ${lightMode?'light':'dark'}`}
                      >
                        Classical Music
                        <span className={`text-sm ${lightMode?'text-DarkBlueText':'text-LightPink'}`}>.Spotify</span>
                      </a>
                      <p>
                        Yeah, I really love classical music, and my favorite
                        composer is Franz Schubert his 8th Symphony is sublime.
                      </p>
                    </li>
                    <li className="ml-5 mt-3">
                      <a
                        href="https://open.spotify.com/playlist/2uD4h8wCG7B2vYrHYxzurQ?si=6cc4769a0a004417"
                        className={`text-[1.4rem] font-bold myread-links w-fit Phone:text-[1.2rem] text-wrap ${lightMode?'light':'dark'}`}
                      >
                        Vocaloid
                        <span className={`text-sm ${lightMode?'text-DarkBlueText':'text-LightPink'}`}>.Spotify</span>
                      </a>
                      <p>
                        I like vocaloid too because I just saw how to make a
                        vocaloid songs and i feel like it is same as composing a
                        classical music because Vocaloid is not AI it is
                        Software and the tuning make it hard to Compose i just
                        amaze how people just make a vocaloid music.
                      </p>
                    </li>
                    <li className="ml-5 mt-3">
                      <a href="https://myanimelist.net/profile/Yesramji" className={`text-[1.4rem] font-bold myread-links w-fit Phone:text-[1.2rem] text-wrap ${lightMode?'light':'dark'}`}>MyAnimeList<span className={`text-sm ${lightMode?'text-DarkBlueText':'text-LightPink'}`}>.MAL</span></a>
                      <p>Check out my anime taste too, I really like romance and Slice Of life anime</p>
                    </li>
                  </ul>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                  className={`${showMenu ? "" : "margin-navlogo"} mt-4`}
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

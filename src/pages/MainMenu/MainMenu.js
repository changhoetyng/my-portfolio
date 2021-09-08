import "./MainMenu.scss";
import Header from "../../components/Header/Header.js";
import Home from "../../components/Home/Home.js";
import AboutMe from "../../components/AboutMe/AboutMe.js";
import Experience from "../../components/Experience/Experience.js";
import Projects from "../../components/Projects/Projects.js";
import Skills from "../../components/Skills/Skills.js";
import RandomObjects from "../../components/RandomObjects/RandomObjects.js";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import React, { useRef, useEffect } from "react";

function MainMenu() {

  const parallaxRef = useRef();

  const onScroll = () =>
    parallaxRef.current.current / parallaxRef.current.space

  useEffect(() => {
    if (!parallaxRef.current || !parallaxRef.current.container) return;
    parallaxRef.current.container.onscroll = onScroll;
  });

  const headerOnClick = (num) => {
    parallaxRef.current.scrollTo(num);
  };

  return (
    <div>
      <Header headerOnClick={headerOnClick} />
      <Parallax
        pages={6}
        style={{ backgroundColor: "black", top: "70px" }}
        ref={parallaxRef}
      >
        {/* <ParallaxLayer offset={3} speed={2.5} background-color={"darkgoldenrod"}/>
    <ParallaxLayer offset={4} speed={2.5} background-color={"darkgoldenrod"}/> */}
        {/* <div className="mainMenu"> */}

        {/* <div className="section"> */}
        <RandomObjects />
        <Home />
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        {/* <GetInTouch /> */}
        {/* </div> */}
        {/* </div> */}
      </Parallax>
    </div>
  );
}

export default MainMenu;

import "./MainMenu.scss";
import Header from "../../components/Header/Header.js";
import Home from "../../components/Home/Home.js";
import AboutMe from "../../components/AboutMe/AboutMe.js";
import Experience from "../../components/Experience/Experience.js";
import Projects from "../../components/Projects/Projects.js";
import Skills from "../../components/Skills/Skills.js";
import GetInTouch from "../../components/GetInTouch/GetInTouch.js";
import RandomObjects from "../../components/RandomObjects/RandomObjects.js";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import React, { useRef, useEffect, useState } from "react";
import { Modal } from "@material-ui/core";


function MainMenu() {

  const parallaxRef = useRef();

  // const [isModal, setModal] = useState(true);

  const onScroll = () =>
    parallaxRef.current.current / parallaxRef.current.space

  useEffect(() => {
    if (!parallaxRef.current || !parallaxRef.current.container) return;
    parallaxRef.current.container.onscroll = onScroll;
  });

  const headerOnClick = (num) => {
    parallaxRef.current.scrollTo(num);
  };

  // var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));

  return (
    <div>
      {/* Will fix when they update react-lottie */}
      {/* <Modal
      open={isModal}
      onClose={() => setModal(false)}
      >
        <div className="modal">
          <h1 style={{color: 'white'}}>test</h1>
        </div>
      </Modal> */}
      <Header headerOnClick={headerOnClick} />
      <Parallax
        pages={5.75}
        style={{ backgroundColor: "black", top: "70px" }}
        ref={parallaxRef}
      >
        <RandomObjects />
        <Home />
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <GetInTouch />
      </Parallax>
    </div>
  );
}

export default MainMenu;

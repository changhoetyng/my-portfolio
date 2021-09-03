import './MainMenu.scss'
import Header from '../../components/Header/Header.js';
import Home from '../../components/Home/Home.js'
import AboutMe from '../../components/AboutMe/AboutMe.js'
import Experience from '../../components/Experience/Experience.js'
import Projects from '../../components/Projects/Projects.js'
import GetInTouch from '../../components/GetInTouch/GetInTouch.js'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

function MainMenu() {
  return (
    <div>
    <Header />
    <Parallax pages={3} style={{backgroundColor: 'black', top: "70px"}}>
    {/* <ParallaxLayer offset={3} speed={2.5} background-color={"darkgoldenrod"}/>
    <ParallaxLayer offset={4} speed={2.5} background-color={"darkgoldenrod"}/> */}
    {/* <div className="mainMenu"> */}
      
      {/* <div className="section"> */}
          <Home />
          <AboutMe />
          <Experience />
          {/* <Projects /> */}
          {/* <GetInTouch /> */}
      {/* </div> */}
    {/* </div> */}
    </Parallax>
    </div>
  );
}

export default MainMenu;

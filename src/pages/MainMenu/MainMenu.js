import './MainMenu.scss'
import Header from '../../components/Header/Header.js';
import Home from '../../components/Home/Home.js'
import AboutMe from '../../components/AboutMe/AboutMe.js'
import Experience from '../../components/Experience/Experience.js'
import Projects from '../../components/Projects/Projects.js'
import GetInTouch from '../../components/GetInTouch/GetInTouch.js'

function MainMenu() {
  return (
    <div className="mainMenu">
      <Header />
      <div className="section">
          <Home />
          <AboutMe />
          <Experience />
          <Projects />
          <GetInTouch />
      </div>
    </div>
  );
}

export default MainMenu;

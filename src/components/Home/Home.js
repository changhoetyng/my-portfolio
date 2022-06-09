import "./Home.scss";
import MyImage from "../../assets/me.png";
import ComputerEmoji from "../../assets/computerEmoji.png";
import ManStudent from "../../assets/manStudent.png";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { Typewriter } from "react-simple-typewriter";
import Button from "@material-ui/core/Button";

function Home() {
  return (
    <div className="home">
      <ParallaxLayer
        offset={0}
        speed={2.5}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="left">
          <span className="name">Hello, I'm</span>
          <br />
          <span className="name">
            <Typewriter
              words={["Hoe Tyng Chang"]}
              cursor
              typeSpeed={100}
              cursorStyle="_"
            />
          </span>
          <br />
          <br />

          <div className="devWrapper">
            <span className="developer">Developer</span>
            <img src={ComputerEmoji} alt="" />
            <span className="plus">+ </span>
            <span className="student">Fresh Graduate Student</span>
            <img src={ManStudent} alt="" />
          </div>

          <br />
          <p>
            I'm a Fresh Graduate student at the University of Nottingham that pursued a
          </p>
          <p>degree in Computer Science with A.I.</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={1.2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <div className="imgContainer">
          <img src={MyImage} alt="" />
        </div>
      </ParallaxLayer>
    </div>
  );
}

export default Home;

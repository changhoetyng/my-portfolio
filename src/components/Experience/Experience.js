import "./Experience.scss";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

function Experience() {
  return (
    <div className="experience">
      <ParallaxLayer
        offset={2}
        speed={1.0}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <span className="title">Experience</span>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={1.5}
        style={{ top: 100, paddingLeft: "3em" }}
      >
        <div className="cardHolder">
          <div className="card">
            <span className="cardTitle">Software Engineering Intern</span>
          </div>
          <div className="card">
            <span className="cardTitle">Software Engineering Intern</span>
          </div>
          <div className="card">
            <span className="cardTitle">Software Engineering Intern</span>
          </div>
          <div className="card">
            <span className="cardTitle">Software Engineering Intern</span>
          </div>
        </div>
      </ParallaxLayer>
    </div>
  );
}

export default Experience;

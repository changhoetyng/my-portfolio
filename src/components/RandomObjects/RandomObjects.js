import MyImage from "../../assets/me.png";
import ComputerEmoji from "../../assets/computerEmoji.png";
import ManStudent from "../../assets/manStudent.png";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { Typewriter } from "react-simple-typewriter";
import Wink from "../../assets/wink.png";
import Sun from "../../assets/sun.png";
import Cloud from "../../assets/cloud.svg";

function RandomObjects() {
  return (
    <div className="randomObjects">
      <ParallaxLayer
        offset={0.35}
        speed={0.5}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "30%" }}>
          <img style={{ width: "90px" }} src={Cloud} alt="" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.6}
        speed={0.3}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "20%" }}>
          <img style={{ width: "90px" }} src={Cloud} alt="" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.5}
        speed={0.6}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "40%" }}>
          <img style={{ width: "90px" }} src={Cloud} alt="" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.2}
        speed={0.6}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "10%" }}>
          <img style={{ width: "200px" }} src={Sun} alt="" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1.01}
        speed={0.9}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "30%" }}>
          <img style={{ width: "90px" }} src={Cloud} alt="" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.92}
        speed={0.14}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "15%" }}>
          <img style={{ width: "90px" }} src={Cloud} alt="" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.87}
        speed={0.2}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "45%" }}>
          <img style={{ width: "90px" }} src={Cloud} alt="" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.96}
        speed={0.3}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "65%" }}>
          <img style={{ width: "90px" }} src={Cloud} alt="" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.6,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "50%" }}>
          <img src={Wink} alt="" />
        </div>
      </ParallaxLayer>
    </div>
  );
}

export default RandomObjects;

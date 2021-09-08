import AvatarTwo from "../../assets/avatar2.png";
import AvatarThree from "../../assets/avatar3.png";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import "./randomObjects.scss";
import Wink from "../../assets/wink.png";
import Sun from "../../assets/sun.png";
import Cloud from "../../assets/cloud.svg";
import Stars from "../../assets/stars.svg";

function RandomObjects() {
  return (
    <div className="randomObjects">
      <ParallaxLayer
          offset={0}
          speed={0.7}
          factor={8}
          style={{
            backgroundImage: `url(${Stars})`,
            backgroundSize: 'cover',
          }}
        />
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
          <img className = "cloud" src={Cloud} alt="" />
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
          <img className = "cloud" src={Cloud} alt="" />
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
          <img className = "cloud" src={Cloud} alt="" />
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
        <div style={{ marginLeft: "10%"}}>
          <img className = "sun" src={Sun} alt="" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.1}
        speed={0.9}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "50%" }}>
          <img className = "cloud" src={Cloud} alt="" />
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
          <img className = "cloud" src={Cloud} alt="" />
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
          <img className = "cloud" src={Cloud} alt="" />
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
          <img className = "cloud" src={Cloud} alt="" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0.3}
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
      <ParallaxLayer
        offset={1.3}
        speed={0.7}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.6,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "20px" }}>
          <img src={AvatarTwo} alt="" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1.9}
        speed={0.45}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.6,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "20%" }}>
          <img src={AvatarThree} alt="" />
        </div>
      </ParallaxLayer>
    </div>
  );
}

export default RandomObjects;

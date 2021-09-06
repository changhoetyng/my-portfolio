import "./AboutMe.scss";
import {ParallaxLayer} from "@react-spring/parallax";
import Wink from '../../assets/wink.png'

function AboutMe() {
  return (
    <div className="aboutMe">
      <ParallaxLayer
        offset={1}
        speed={1.2}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <span className="title">About Me</span>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={1.5}
        style={{ top: 100, paddingLeft: "3em" }}
      >
        <div style={{ width: "50%" }}>
          <p className="description">
            Hi, my name is Chang Hoe Tyng. I’m a Year 3 Computer Science with
            A.I. student that are currently studying in the University of
            Nottingham.
          </p>
          <br />
          <br />
          <p className="description">
            I enjoy learning things that are tech-related whether that be a new
            framework or new tech stacks which leads me to innovate personal
            projects and acquiring better knowledge in this field during my
            pastime.
          </p>
          <br />
          <br />
          <p className="description">
            My relationship with computers began at the age of 6 when my parents
            bought me my first computer. I was amazed at how the internet can
            connect millions of people worldwide just by using a cable and to
            me, it was magical, From then on, I was inspired to become a
            computer scientist where I too can perform the “magic”. I was
            ecstatic when I wrote my first HTML page at the age of 13 where it
            displayed my name and an about me tab which was pretty satisfying at
            that time. But I knew it wasn’t enough, and so I embarked on a
            journey to learn new technologies and frameworks on Youtube.
          </p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end"
        }}>
          <div className="imgContainer">
            <img src={Wink} alt="" />
          </div>
        </ParallaxLayer>
    </div>
  );
}

export default AboutMe;

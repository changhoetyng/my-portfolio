import "./Skills.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { GitHub, Language } from '@material-ui/icons';
import React, { useState } from "react";

function Skills() {

  return (
    <div className="skills">
      <ParallaxLayer
        offset={4}
        speed={1.0}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <p className="title">Skills</p>
      </ParallaxLayer>
      <ParallaxLayer
        offset={4.24}
        speed={0.9}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "20%" }}>
        <p className="skillsTitle">React</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={4.29}
        speed={0.85}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "47%" }}>
        <p className="skillsTitle">React Native</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={4.22}
        speed={0.9}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "75%" }}>
        <p className="skillsTitle">ExpressJS</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={4.30}
        speed={0.9}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "5%" }}>
        <p className="skillsTitle">Kotlin</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={4.35}
        speed={0.8}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "35%" }}>
        <p className="skillsTitle">ASP.NET Core MVC</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={4.37}
        speed={0.8}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "15%" }}>
        <p className="skillsTitle">Java</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={4.42}
        speed={0.75}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "65%" }}>
        <p className="skillsTitle">MongoDB</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={4.45}
        speed={0.77}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "35%" }}>
        <p className="skillsTitle">MySQL</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={4.52}
        speed={0.85}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "15%" }}>
        <p className="skillsTitle">Android Native Development</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={4.59}
        speed={0.80}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "5%" }}>
        <p className="skillsTitle">Sequelize</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={4.59}
        speed={0.90}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "45%" }}>
        <p className="skillsTitle">HTML/CSS</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={4.65}
        speed={0.92}
        style={{
          position: "absolute",
          right: 0,
          opacity: 0.5,
          zIndex: -10,
        }}
      >
        <div style={{ marginLeft: "30%" }}>
        <p className="skillsTitle">Python</p>
        </div>
      </ParallaxLayer>
    </div>
  );
}

export default Skills;
import "./Experience.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import AirasiaLogo from "../../assets/airasiaLogo.svg";
import OberLogo from "../../assets/oberLogo.jpg";
import EmptyLogo from "../../assets/emptyLogo.jpg";
import React, { useState } from "react";

function Experience() {
  const [isFirstActive, setFirstActive] = useState(false);
  const [isFirstVisible, setFirstVisible] = useState(true);
  const [isSecondActive, setSecondActive] = useState(false);
  const [isSecondVisible, setSecondVisible] = useState(true);
  const [isThirdActive, setThirdActive] = useState(false);
  const [isThirdVisible, setThirdVisible] = useState(true);

  function turn(modalType) {
    if (modalType === "first") {
      isFirstActive ? setFirstActive(false) : setFirstActive(true);
      if (isFirstActive) {
        setSecondVisible(true);
        setThirdVisible(true);
      } else {
        setSecondVisible(false);
        setThirdVisible(false);
      }
    }

    if (modalType === "second") {
      isSecondActive ? setSecondActive(false) : setSecondActive(true);
      if (isSecondActive) {
        setFirstVisible(true);
        setThirdVisible(true);
      } else {
        setFirstVisible(false);
        setThirdVisible(false);
      }
    }

    if (modalType === "third") {
      isThirdActive ? setThirdActive(false) : setThirdActive(true);
      if (isThirdActive) {
        setFirstVisible(true);
        setSecondVisible(true);
      } else {
        setFirstVisible(false);
        setSecondVisible(false);
      }
    }
  }

  return (
    <div className="experience">
      <ParallaxLayer
        offset={2}
        speed={1.0}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <p className="title">Experience</p>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={1.5}
        factor={4.0}
        style={{ top: 100}}
      >
        <div className="cardHolder">
          <div
            className={isFirstActive ? "cardActive" : "card"}
            onClick={() => turn("first")}
          >
            <div
              style={{ display: "flex", flexDirection: "column", flex: 0.38 }}
            >
              <span className="cardTitle">Software Engineering Intern</span>
              <br />
              <div style={{ marginBottom: "15px" }}>
                <img className="logo" src={AirasiaLogo} alt="" />
                <span className="companyName">Airasia</span>
              </div>
              <p className="period">June 2021 - September 2021</p>
              <p className="period">Kuala Lumpur, Malaysia</p>
              <p
                className="clickme"
                style={{ position: "absolute", bottom: 20, left: 20 }}
              >
                Click me to learn more.
              </p>
            </div>

            <div class="right" style={{ flex: 0.60 }}>
              <p className="title">Description</p>
              <br />
              <p className="description">
                - Developed test cases for Node.js backend using Jest.
              </p>
              <p className="description">
                - Developed a food reservation app using React Native as the
                frontend and a three-layered structure backend which consists of
                MySQL database at the bottom, Sequelize as the ORM and Fastify
                as the controller.
              </p>
            </div>
          </div>
          <div
            className={isSecondActive ? "cardActive" : "card"}
            onClick={() => turn("second")}
          >
            <div
              style={{ display: "flex", flexDirection: "column", flex: 0.38 }}
            >
              <span className="cardTitle">Software Engineering Intern</span>
              <br />
              <div style={{ marginBottom: "15px" }}>
                <img className="logo" src={EmptyLogo} alt="" />
                <span className="companyName">Dokonee Sdn Bhd</span>
              </div>
              <p className="period">June 2020 - August 2020</p>
              <p className="period">Petaling Jaya, Malaysia</p>
              <p
                className="clickme"
                style={{ position: "absolute", bottom: 20, left: 20 }}
              >
                Click me to learn more.
              </p>
            </div>

            <div class="right" style={{ flex: 0.60 }}>
              <p className="title">Description</p>
              <br />
              <p className="description">
                - Developed test cases for Node.js backend using Jest.
              </p>
              <p className="description">
                - Developed a food reservation app using React Native as the
                frontend and a three-layered structure backend which consists of
                MySQL database at the bottom, Sequelize as the ORM and Fastify
                as the controller.
              </p>
              <p className="description">- Worked in an agile environment.</p>
              <br />
              <p className="description">
                Technologies: React Native, Fastify, Redux, Git, JIRA, Jest,
                Sequelize
              </p>
            </div>
          </div>
          <div
            className={isThirdActive ? "cardActive" : "card"}
            onClick={() => turn("third")}
          >
            <div
              style={{ display: "flex", flexDirection: "column", flex: 0.38 }}
            >
              <span className="cardTitle"> Ride Operator</span>
              <br />
              <div style={{ marginBottom: "15px" }}>
                <img className="logo" src={OberLogo} alt="" />
                <span className="companyName">Ober Gatlinburg</span>
              </div>
              <p className="period">June 2019 - September 2019</p>
              <p className="period">TN, United States</p>
              <p
                className="clickme"
                style={{ position: "absolute", bottom: 20, left: 20 }}
              >
                Click me to learn more.
              </p>
            </div>

            <div class="right" style={{ flex: 0.60 }}>
              <p className="title">Description</p>
              <br />
              <p className="description">
                - Ensuring the guests have passed the required regulations
                before they go on the rides.
              </p>
              <p className="description">
                - Advised people on proper safety information to ensure a safe
                environment for all guests.
              </p>
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </div>
  );
}

export default Experience;

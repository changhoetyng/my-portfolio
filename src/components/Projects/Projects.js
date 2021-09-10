import "./Projects.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { GitHub, Language } from '@material-ui/icons';
import React, { useState } from "react";
import { openInNewTab } from "../../functions/openInNewTab";

function Projects() {
  const [isFirstActive, setFirstActive] = useState(false);
  const [isSecondActive, setSecondActive] = useState(false);
  const [isThirdActive, setThirdActive] = useState(false);

  function turn(modalType) {
    if (modalType === "first") {
      isFirstActive ? setFirstActive(false) : setFirstActive(true);
    }

    if (modalType === "second") {
      isSecondActive ? setSecondActive(false) : setSecondActive(true);
    }

    if (modalType === "third") {
      isThirdActive ? setThirdActive(false) : setThirdActive(true);
    }
  }

  return (
    <div className="projects">
      <ParallaxLayer
        offset={3}
        speed={1.0}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <p className="title">Projects</p>
      </ParallaxLayer>
      <ParallaxLayer
        offset={3}
        speed={1.5}
        factor={4.0}
        style={{ top: 100}}
      >
        <div className="cardHolder">
          <div
            className={isFirstActive ? "cardActive" : "card"}
            
          >
            <div
              style={{ display: "flex", flexDirection: "column", flex: 0.38}}
            >
              <span className="cardTitle">Infix Prefix Postfix Visualizer</span>
              <br />
              <Button variant="outlined" className="button" size="small" onClick={() => turn("first")}>{!isFirstActive ? "Show More." : "Show Less."}</Button>
              <GitHub className="logo" onClick={() => openInNewTab('https://github.com/changhoetyng/ippVisualizer')}/>
              <Language className="browser" onClick={() => openInNewTab('https://changhoetyng.github.io/ippVisualizer/')}/>
            </div>

            <div class="right" style={{ flex: 0.6 }}>
              <p className="title">Description</p>
              <br />
              <p className="description">
                - Visualize how infix, prefix, and postfix conversion works to help students understand how the conversion works.
              </p>
              <p className="title">Technologies</p>
              <br />
              <p className="description">
                - CSS, HTML, JavaScript, JQuery, and Bootstrap.
              </p>
            </div>
          </div>
          <div
            className={isThirdActive ? "cardActive" : "card"}
            
          >
            <div
              style={{ display: "flex", flexDirection: "column", flex: 0.38}}
            >
              <span className="cardTitle">University Utilities Booking Mobile App</span>
              <br />
              <Button variant="outlined" className="button" size="small" onClick={() => turn("third")}>{!isThirdActive ? "Show More." : "Show Less."}</Button>
              <GitHub className="logo" onClick={() => openInNewTab('https://github.com/changhoetyng/University-Utilities-Booking-Mobile-App')}/>
            </div>

            <div class="right" style={{ flex: 0.6 }}>
              <p className="title">Description</p>
              <br />
              <p className="description">
              - Ease students on booking school utilities where students are able to book utilities using their phone.
              </p>
              <p className="description">
              - Led a team of 6 across broad technical disciplines and defined project scope and schedule for timely delivery of a year-long project.
              </p>
              <p className="description">
              - Uses both React and React Native as the frontend, mongoose as the ODM, MongoDB as the database and Node.js with ExpressJS for the backend.
              </p>
              <p className="title">Technologies</p>
              <br />
              <p className="description">
                - React, React Native, Mongoose, MongoDB, ExpressJS, Node.js
              </p>
            </div>
          </div>
          <div
            className={isSecondActive ? "cardActive" : "card"}
            
          >
            <div
              style={{ display: "flex", flexDirection: "column", flex: 0.38}}
            >
              <span className="cardTitle">Toll Calculator</span>
              <br />
              <Button variant="outlined" className="button" size="small" onClick={() => turn("second")}>{!isSecondActive ? "Show More." : "Show Less."}</Button>
              <GitHub className="logo" onClick={() => openInNewTab('https://github.com/changhoetyng/tollCalc')}/>
            </div>

            <div class="right" style={{ flex: 0.6 }}>
              <p className="title">Description</p>
              <br />
              <p className="description">
                - Used google maps platform and React to build a simple closed-toll calculator that allows users to calculate toll fares.
              </p>
              <p className="title">Technologies</p>
              <br />
              <p className="description">
                - React, JavaScript, Google Maps Platform.
              </p>
            </div>
          </div>
          
        </div>
      </ParallaxLayer>
    </div>
  );
}

export default Projects;
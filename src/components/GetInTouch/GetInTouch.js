import "./GetInTouch.scss";
import { ParallaxLayer } from "@react-spring/parallax";
import { GitHub, LinkedIn } from '@material-ui/icons';
import { openInNewTab } from "../../functions/openInNewTab";
import { Button } from "@material-ui/core";

function GetInTouch() {

  return (
    <div className="getInTouch">
      <ParallaxLayer
        offset={5}
        speed={1.0}
        factor={0.6}
        style={{ display: "flex", backgroundColor: "white", padding: "40px" }}
      >
        <div className="container">
          <p className="title">Get In Touch</p>
          <p className="phone">Phone: +60172483131</p>
          <a 
            className="email"
            href="mailto:hoetyng@gmail.com"
          >
            hoetyng@gmail.com
          </a>
          <div className="logo">
          <GitHub style={{cursor: 'pointer'}} onClick={() => openInNewTab('https://github.com/changhoetyng')}/>
          <LinkedIn style={{marginLeft: '8px', cursor: 'pointer'}} onClick={() => openInNewTab('https://www.linkedin.com/in/hoe-tyng-chang/')}/>
          </div>
          <Button variant="outlined" className="button" size="small" onClick={() => openInNewTab("https://drive.google.com/file/d/1r22OyrOADzEF3nVaYo_TVl6kCjTqrbrF/view?usp=sharing")}>My Resume</Button>
        </div>
      </ParallaxLayer>
    </div>
  );
}

export default GetInTouch;

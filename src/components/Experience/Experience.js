import './Experience.css'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

function Experience() {
  return (
    <ParallaxLayer
    offset={2}
    speed={2.5}>
      <div className="experience">
          <p>Experience</p>
      </div>
      </ParallaxLayer>
  );
}

export default Experience;
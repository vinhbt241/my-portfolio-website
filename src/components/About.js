import { motion } from "framer-motion";
import { HoverLink } from "./HoverLink";

import HTMLIcon from "../images/html.png";
import CSSIcon from "../images/css-3.png";
import JSIcon from "../images/java-script.png";
import RubyIcon from "../images/ruby.png";
import RailsIcon from "../images/rails.png";
import ReactIcon from "../images/react-icon-15.png";
import GitIcon from "../images/git-icon.png"

const About = () => {
  return(
    <motion.div
      className="About"
      
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
     
      <HoverLink pathName="/" styleLink="HoverLink home-link" hoverText="vinh.home" notHoverText="vinh."/>

      <div className="about-header">
        <motion.div
          initial={{height: 0, y: 200}}
          animate={{height: "2.6em", y: 0}}
          transition={{ ease: "easeOut",duration: .5 }}
          className="motion-container">
          <p>I am a <span className="purple-text">Full-Stack</span> developer</p>
        </motion.div>
      </div>

      <div className="about-skills">
        <h1 className="purple-text">
          My skills
        </h1>
        
        <div>
          <h2>
            Front-end
          </h2>
          <div className="skills-container">
            <div className="skill-container">
              <h3>HTML</h3>
              <img className="skill-icon" src={HTMLIcon} alt=""/>
            </div>
            <div className="skill-container">
              <h3>CSS</h3>
              <img className="skill-icon" src={CSSIcon} alt=""/>
            </div>
            <div className="skill-container">
              <h3>JavaScript</h3>
              <img className="skill-icon" src={JSIcon} alt=""/>
            </div>
            <div className="skill-container">
              <h3>React</h3>
              <img className="skill-icon" src={ReactIcon} alt=""/>
            </div>
          </div>
        </div>
        
        <div>
          <h2>
            Back-end
          </h2>
          <div className="skills-container">
            <div className="skill-container">
              <h3>Ruby</h3>
              <img className="skill-icon" src={RubyIcon} alt=""/>
            </div>
            <div className="skill-container">
              <h3>Rails</h3>
              <img className="skill-icon" src={RailsIcon} alt=""/>
            </div>
          </div>
        </div>

        <div>
          <h2>
            Other
          </h2>
          <div className="skills-container">
            <div className="skill-container">
              <h3>Git</h3>
              <img className="skill-icon" src={GitIcon} alt=""/>
            </div>
          </div>
        </div>
      </div>

      <div className="about-main">
        <h1>About me</h1>
        <p>
          In my past life I was a student majoring in Electronics and Telecommunications. I took many courses such as Computer Network, Computer System and Programming Languages, and Computer Architecture. The first taught me how the Internet work. The second forced me to write programs running by C++ and Assembly. Yes, it was hard, but the course helped me build a solid foundation about how programming languages work under the hood. The final taught me that knowing how to work with computer operating systems is severely underrated.
        </p>
        <p>
          At the end of the winter in my third year, I discovered The Odin Project, an open-source curriculum written by developers that teach (almost) everything one needs to be a capable full-stack developer. Projects range from pretty serious hand-holding in the beginning to "Go on kid. Make Facebook. You'll figure it out". I got hooked. Big time.
        </p>
        <p>
          I spent every day since then getting stuck until I figured out how to get unstuck. I make hundreds, if not thousands, of mistakes and learned from every one of them. Coding invigorates me in a way few things ever have. The logical part of my brain loves the process; the creative side of my brain loves the chaos.
        </p>
        <p>
          You can read more about my biography, experience, skills, education and much more in the PDF attached below:
        </p>
        <p className="purple-text HoverLinkText">My resume</p>
      </div>
    </motion.div>
  )
}

export { About }

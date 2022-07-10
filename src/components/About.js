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
        <p>I am a <span className="purple-text">Full-Stack</span> developer</p>
      </div>

      <div className="about-skills">
        <h1 className="purple-text">
          My skills
        </h1>
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

      <div className="about-main">
        <h1>About</h1>
        <p>Nulla tincidunt magna at leo finibus, sed varius urna bibendum. Nulla facilisi. Morbi consequat lectus vel felis egestas tristique. Cras in metus eget lacus euismod accumsan eu eget odio. Nunc sit amet orci molestie, eleifend metus eget, dapibus tortor. Aliquam scelerisque leo dui, at egestas massa scelerisque fringilla. Proin euismod neque enim, sed tristique ligula hendrerit et. Suspendisse potenti. Nulla augue tortor, fermentum eu euismod sit amet, mattis ac ligula. Quisque finibus pharetra dolor. Sed non commodo neque. Nullam malesuada tempor felis, vel rutrum elit bibendum quis. Praesent aliquet ullamcorper ex a vulputate. Phasellus at quam quam. Duis id elit vel ligula tincidunt malesuada. </p>
        <p className="purple-text HoverLinkText">My resume</p>
      </div>
    </motion.div>
  )
}

export { About }

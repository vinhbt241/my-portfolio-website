import { motion } from "framer-motion";
import { HoverLink } from "./HoverLink";

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

      <div className="about-illustrate">

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

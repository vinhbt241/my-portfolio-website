import { HoverLink } from "./HoverLink";
import { motion } from "framer-motion";

const LinkContainer = () => {  
  return(
    <div className="LinkContainer">
      <motion.div
        initial={{height: 0, y: 200}}
        animate={{height: "auto", y: 0}}
        transition={{ ease: "easeOut",duration: .5, delay: .5 }}
        className="motion-container">
        <HoverLink 
          pathName="about" 
          styleLink="HoverLink purple-text" 
          hoverText="About" 
          notHoverText="Hello."/>
      </motion.div>
      <motion.div
        initial={{height: 0, y: 200}}
        animate={{height: "auto", y: 0}}
        transition={{ ease: "easeOut",duration: .5, delay: 1 }}
        className="motion-container">
        <HoverLink 
          pathName="work" 
          styleLink="HoverLink" 
          hoverText="Work" 
          notHoverText="I am"/>
      </motion.div>
      <motion.div
        initial={{height: 0, y: 200}}
        animate={{height: "auto", y: 0}}
        transition={{ ease: "easeOut",duration: .5, delay: 1.5 }}
        className="motion-container">
        <HoverLink 
          pathName="contact" 
          styleLink="HoverLink" 
          hoverText="Contact" 
          notHoverText="Vinh"/>
      </motion.div>
    </div>
  )
}

export {LinkContainer}

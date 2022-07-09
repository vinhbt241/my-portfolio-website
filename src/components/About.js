import { motion } from "framer-motion"
import { HoverLink } from "./HoverLink"

const About = () => {
  return(
    <motion.div
      className="About"
      
      initial={{height: 0}}
      animate={{height: "100vh"}}
      exit={{y: window.innerHeight}}>
     
      <HoverLink pathName="/" styleLink="HoverLink home-link" hoverText="Vinh.works" notHoverText="Vinh."/>

      <div className="job-state-container">
        <p>I am a <span className="purple-text">Full-Stack</span> developer</p>
      </div>
    </motion.div>
  )
}

export { About }

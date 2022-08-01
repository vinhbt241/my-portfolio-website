import { motion } from "framer-motion";
import { ProjectLink } from "./ProjectLink";
import { HoverLink } from "./HoverLink";

import ShoppingCartImg from "../images/shopping-cart.png";
import WaldoImg from "../images/where-is-waldo.png"

const Work = () => {
  return(
    <motion.div
      className="Work"
      
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
      <HoverLink pathName="/" styleLink="HoverLink home-link" hoverText="vinh.home" notHoverText="vinh."/>

      <div className="project-links">
        <ProjectLink 
          projectName="Shopping Cart" 
          liveLink="https://vinhbt241.github.io/shopping-cart/"
          codeLink="https://github.com/vinhbt241/shopping-cart"
          description="A React Application"
          imgSrc={ShoppingCartImg} />
        <ProjectLink
          projectName="Where is Waldo?"
          liveLink="https://vinhbt241.github.io/where-is-waldo/"
          codeLink="https://github.com/vinhbt241/where-is-waldo"
          description="A Puzzle Game with React as Front-end and Rails as Back-end"
          imgSrc={WaldoImg}
          />
      </div>
    </motion.div>
  )
}

export { Work }

import { motion } from "framer-motion";
import { ProjectLink } from "./ProjectLink";
import { HoverLink } from "./HoverLink";

import ShoppingCartImg from "../images/shopping-cart.png";
import WaldoImg from "../images/where-is-waldo.png";
import SocialNetworkImg from "../images/social_network.jpg";
import BattleShipImg from "../images/battle-ship.png"

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
          projectName="Online Battle Ship" 
          liveLink="https://github.com/vinhbt241/js-battleship"
          codeLink="https://vinhbt241.github.io/js-battleship/"
          description="A classic game created with vanilla JavaScript"
          imgSrc={BattleShipImg} />

        <ProjectLink 
          projectName="Super Hardcore shop" 
          liveLink="https://vinhbt241.github.io/shopping-cart/"
          codeLink="https://github.com/vinhbt241/shopping-cart"
          description="A shopping UI created using React"
          imgSrc={ShoppingCartImg} />
        <ProjectLink
          projectName="Where is Waldo?"
          liveLink="https://vinhbt241.github.io/where-is-waldo/"
          codeLink="https://github.com/vinhbt241/where-is-waldo"
          description="A Puzzle Game with React as Front-end and Rails as Back-end"
          imgSrc={WaldoImg}
          />
        <ProjectLink
          projectName="Virtuoso"
          liveLink="https://vinhbt241.github.io/js-social-network/"
          codeLink="https://github.com/vinhbt241/js-social-network"
          description="A social network built with React and Rails"
          imgSrc={SocialNetworkImg}
          />
      </div>
    </motion.div>
  )
}

export { Work }

import { LinkContainer } from "./LinkContainer";
import { motion } from "framer-motion";

import Avatar from "../images/avatar.png"

const Home = () => {
  return(
    <motion.div 
      className="Home"

      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
      <LinkContainer />

      <img src={Avatar} alt ="" className="avatar"/>
    </motion.div>
  )
}

export { Home }

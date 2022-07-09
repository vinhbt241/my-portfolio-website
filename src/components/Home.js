import { LinkContainer } from "./LinkContainer";
import { motion } from "framer-motion";

const Home = () => {
  return(
    <motion.div 
      className="Home"

      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
      <LinkContainer />
    </motion.div>
  )
}

export { Home }

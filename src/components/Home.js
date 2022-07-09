import { LinkContainer } from "./LinkContainer";
import { motion } from "framer-motion";

const Home = () => {
  return(
    <motion.div 
      className="Home"

      initial={{height: 0}}
      animate={{height: "100vh"}}
      exit={{y: window.innerHeight}}>
      <LinkContainer />
    </motion.div>
  )
}

export { Home }

import { motion } from "framer-motion"

const About = () => {
  return(
    <motion.div
      className="About"
      
      initial={{height: 0}}
      animate={{minHeight: "100vh"}}
      exit={{y: window.innerHeight}}>
      ABOUT PAGE
    </motion.div>
  )
}

export { About }

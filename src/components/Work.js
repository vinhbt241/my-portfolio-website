import { motion } from "framer-motion"

const Work = () => {
  return(
    <motion.div
      className="Work"
      
      initial={{height: 0}}
      animate={{minHeight: "100vh"}}
      exit={{y: window.innerHeight}}>
      WORK PAGE
    </motion.div>
  )
}

export { Work }

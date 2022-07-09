import { motion } from "framer-motion"

const Work = () => {
  return(
    <motion.div
      className="Work"
      
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
      WORK PAGE
    </motion.div>
  )
}

export { Work }

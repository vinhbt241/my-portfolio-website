import { motion } from "framer-motion";

const Contact = () => {
  return(
    <motion.div
      className="Contact"
      
      initial={{height: 0}}
      animate={{height: "auto"}}
      exit={{y: window.innerHeight}}>
      CONTACT PAGE
    </motion.div>
  )
}

export { Contact }

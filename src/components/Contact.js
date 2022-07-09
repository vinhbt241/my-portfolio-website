import { motion } from "framer-motion";

const Contact = () => {
  return(
    <motion.div
      className="Contact"
      
      initial={{height: 0}}
      animate={{height: "100vh"}}
      exit={{y: window.innerHeight}}>
      CONTACT PAGE
    </motion.div>
  )
}

export { Contact }

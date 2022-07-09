import { motion } from "framer-motion"

const About = () => {
  return(
    <motion.div
      className="About"
      
      initial={{height: 0}}
      animate={{minHeight: "100vh"}}
      exit={{y: window.innerHeight}}>
      <div className="home-link">Vinh.</div>

      <h1>
        I am a <span className="purple-text">Full-Stack</span> developer
      </h1>
    </motion.div>
  )
}

export { About }

import { motion } from "framer-motion";
import { HoverLink } from "./HoverLink";

const Contact = () => {
  return(
    <motion.div
      className="Contact"
      
      initial={{height: 0}}
      animate={{height: "auto"}}
      exit={{y: window.innerHeight}}>
    <HoverLink pathName="/" styleLink="HoverLink home-link" hoverText="vinh.home" notHoverText="vinh."/>

    <div className="contact-header">
        <p>
          Let's make 
          <br></br>
          something great!
        </p>
    </div>

    <div className="contact-main">
        <h1>Contact</h1>
        <p>Nulla tincidunt magna at leo finibus, sed varius urna bibendum. Nulla facilisi. Morbi consequat lectus vel felis egestas tristique. Cras in metus eget lacus euismod accumsan eu eget odio. Nunc sit amet orci molestie, eleifend metus eget, dapibus tortor. Aliquam scelerisque leo dui, at egestas massa scelerisque fringilla. Proin euismod neque enim, sed tristique ligula hendrerit et. Suspendisse potenti. Nulla augue tortor, fermentum eu euismod sit amet, mattis ac ligula. Quisque finibus pharetra dolor. Sed non commodo neque. Nullam malesuada tempor felis, vel rutrum elit bibendum quis. Praesent aliquet ullamcorper ex a vulputate. Phasellus at quam quam. Duis id elit vel ligula tincidunt malesuada. </p>
        <p className="purple-text HoverLinkText">vinh2000bt@gmail.com</p>
        <p className="purple-text HoverLinkText">Facebook</p>
        <p className="purple-text HoverLinkText">Linkedin</p>
      </div>
    </motion.div>
  )
}

export { Contact }

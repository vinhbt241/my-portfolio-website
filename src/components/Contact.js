import { motion } from "framer-motion";
import { HoverLink } from "./HoverLink";

const Contact = () => {
  return(
    <motion.div
      className="Contact"
      
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
    <HoverLink pathName="/" styleLink="HoverLink home-link" hoverText="vinh.home" notHoverText="vinh."/>

    <div className="contact-header">
        <p>
          Together we can
          <br></br>
          create <span className="purple-text">greatness!</span>
        </p>
    </div>

    <div className="contact-main">
        <h1>Contact</h1>
        <p>Nulla tincidunt magna at leo finibus, sed varius urna bibendum. Nulla facilisi. Morbi consequat lectus vel felis egestas tristique. Cras in metus eget lacus euismod accumsan eu eget odio. Nunc sit amet orci molestie, eleifend metus eget, dapibus tortor. Aliquam scelerisque leo dui, at egestas massa scelerisque fringilla. Proin euismod neque enim, sed tristique ligula hendrerit et. Suspendisse potenti. Nulla augue tortor, fermentum eu euismod sit amet, mattis ac ligula. Quisque finibus pharetra dolor. Sed non commodo neque. Nullam malesuada tempor felis, vel rutrum elit bibendum quis. Praesent aliquet ullamcorper ex a vulputate. Phasellus at quam quam. Duis id elit vel ligula tincidunt malesuada. </p>
        <p className="purple-text HoverLinkText">vinh2000bt@gmail.com</p>
        <p>
          <a
            href="https://www.facebook.com/profile.php?id=100008579102814"
            target="_blank"
            rel="noopener noreferrer"
            className="purple-text HoverLinkText">
            Facebook
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/vinh-b%C3%B9i-th%E1%BA%BF-69702315b/"
            target="_blank"
            rel="noopener noreferrer"
            className="purple-text HoverLinkText">
            Linkedin
          </a>
        </p>
      </div>
    </motion.div>
  )
}

export { Contact }

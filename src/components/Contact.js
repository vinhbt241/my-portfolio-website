import { motion } from "framer-motion";
import { useState } from "react";
import { HoverLink } from "./HoverLink";

const Contact = () => {
  const [emailHovered, setEmailHovered] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("vinh2000bt@gmail.com");
    setEmailCopied(true);
  }

  return(
    <motion.div
      className="Contact"
      
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
    <HoverLink pathName="/" styleLink="HoverLink home-link" hoverText="vinh.home" notHoverText="vinh."/>

    <div className="contact-header">
        <motion.div
          initial={{height: 0, y: 200}}
          animate={{height: "2.6em", y: 0}}
          transition={{ ease: "easeOut",duration: .5 }}
          className="motion-container">
          <p>
            Together we can
            <br></br>
            create <span className="purple-text">greatness!</span>
          </p>
        </motion.div>
    </div>

    <div className="contact-main">
        <h1>Contact</h1>
        <p>
          I'm always looking for ways to improve. If you have a suggestion on how I could do that or would like to discusses a job/project oppoturnity, I'd love to chat.
        </p>
        <p className="purple-text HoverLinkText">
          <button 
            className="unstyle-button"
            onMouseEnter={() => setEmailHovered(true)}
            onMouseLeave={() => {
              setEmailHovered(false);
              setEmailCopied(false);
            }}
            onClick={copyEmailToClipboard}>
            { emailHovered ? (emailCopied ? "Email copied" : "Copy to clipboard") :  "vinh2000bt@gmail.com" } 
          </button>
        </p>

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

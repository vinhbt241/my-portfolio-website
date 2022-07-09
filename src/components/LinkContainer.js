import { useState } from "react";
import { HoverLink } from "./HoverLink";

const LinkContainer = () => {  
  return(
    <div className="LinkContainer">
      <HoverLink pathName="about" styleLink="HoverLink purple-text" hoverText="About" notHoverText="Hello."/>
      <HoverLink pathName="work" styleLink="HoverLink" hoverText="Work" notHoverText="I am"/>
      <HoverLink pathName="contact" styleLink="HoverLink" hoverText="Contact" notHoverText="Vinh"/>
    </div>
  )
}

export {LinkContainer}

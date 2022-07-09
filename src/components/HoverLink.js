import { useState } from "react";
import { Link } from "react-router-dom";

const HoverLink = (props) => {
  const [isShow, setIsShow] = useState(false);

  return(
    <Link
      to={props.pathName}
      className={props.styleLink}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}>
      {isShow ? 
        <div className="showLink">{props.hoverText}</div> 
        : 
        <div className="hidLink">{props.notHoverText}</div>}
    </Link>
  )
}

export { HoverLink }

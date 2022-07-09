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
      <div className="HoverLinkText">
        {isShow ? props.hoverText : props.notHoverText}
      </div>
    </Link>
  )
}

export { HoverLink }

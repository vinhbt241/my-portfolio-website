import { useState } from "react";
import { Link } from "react-router-dom";

const LinkContainer = () => {
  const [aboutShow, setAboutShow] = useState(false);
  const [worksShow, setWorksShow] = useState(false);
  const [contactShow, setContactShow] = useState(false);
  
  return(
    <div className="LinkContainer">
      <Link 
        to="about"
        className="purple-text"
        style={{ textDecoration: 'none' }}
        onMouseEnter={() => setAboutShow(true)}
        onMouseLeave={() => setAboutShow(false)}>
        {aboutShow ? 
          <div className="showLink">About</div> 
          : 
          <div className="hidLink">Hello.</div>}
      </Link>
      <Link
        to="work"
        style={{ textDecoration: 'none', color: 'inherit' }}
        onMouseEnter={() => setWorksShow(true)}
        onMouseLeave={() => setWorksShow(false)}>
        {worksShow ? 
          <div className="showLink">Work</div> 
          : 
          <div className="hidLink">I am</div>}
      </Link>
      <Link
        to="contact"
        style={{ textDecoration: 'none', color: 'inherit' }}
        onMouseEnter={() => setContactShow(true)}
        onMouseLeave={() => setContactShow(false)}>
        {contactShow ? 
          <div className="showLink">Contact</div> 
          : 
          <div className="hidLink">Vinh</div>}
      </Link>
    </div>
  )
}

export {LinkContainer}

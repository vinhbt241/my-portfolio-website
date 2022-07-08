import { useState } from "react"

const LinkContainer = () => {
  const [aboutShow, setAboutShow] = useState(false);
  const [worksShow, setWorksShow] = useState(false);
  const [contactShow, setContactShow] = useState(false);

  return(
    <div className="LinkContainer">
      <div 
        className="link hello"
        onMouseEnter={() => setAboutShow(true)}
        onMouseLeave={() => setAboutShow(false)}>
        {aboutShow ? 
          <div className="showLink">About</div> 
          : 
          <div className="hidLink">Hello.</div>}
      </div>
      <div
       className="link"
       onMouseEnter={() => setWorksShow(true)}
       onMouseLeave={() => setWorksShow(false)}>
        {worksShow ? 
          <div className="showLink">Works</div> 
          : 
          <div className="hidLink">I am</div>}
      </div>
      <div
        className="link"
        onMouseEnter={() => setContactShow(true)}
        onMouseLeave={() => setContactShow(false)}>
        {contactShow ? 
          <div className="showLink">Contact</div> 
          : 
          <div className="hidLink">Vinh</div>}
      </div>
    </div>
  )
}

export {LinkContainer}

import { useState } from "react"

const LinkContainer = () => {
  const [aboutShow, setAboutShow] = useState(false);
  const [worksShow, setWorksShow] = useState(false);
  const [contactShow, setContactShow] = useState(false);

  return(
    <div className="LinkContainer">
      <div 
        className="link"
        onMouseEnter={() => setAboutShow(true)}
        onMouseLeave={() => setAboutShow(false)}>
        {aboutShow ? "About" : "Hello."}
      </div>
      <div
       className="link"
       onMouseEnter={() => setWorksShow(true)}
       onMouseLeave={() => setWorksShow(false)}>
        {worksShow ? "Works" : "I am"}
      </div>
      <div
        className="link"
        onMouseEnter={() => setContactShow(true)}
        onMouseLeave={() => setContactShow(false)}>
        {contactShow ? "Contact" : "Vinh"}
      </div>
    </div>
  )
}

export {LinkContainer}

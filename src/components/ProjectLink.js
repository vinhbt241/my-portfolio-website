const ProjectLink = (props) => {
  return(
    <div className="ProjectLink">
      <h1>{props.projectName}</h1>
      <p>{props.description}</p>
      <img className="project-illustration" src={props.imgSrc} alt=""/>
      <a 
        href={props.liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="HoverLinkText purple-text">
        Live
      </a>
      <a 
        href={props.codeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="HoverLinkText purple-text">
        Code
      </a>
      
    </div>
  )
}

export { ProjectLink }

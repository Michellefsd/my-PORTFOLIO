

function ProjectPage({ title, img, resume }) {
  return (
    <div>
     
        <h2>{title}</h2>
        <img src={img} alt={title} />
        <p>{resume}</p>
    </div>
  )
}

export default ProjectPage
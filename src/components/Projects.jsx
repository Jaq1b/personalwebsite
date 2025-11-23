import './TabContent.css'

function Projects() {
  const projects = [
    {
      title: 'Project One',
      description: 'Description of project one. This is a detailed explanation of what the project does, technologies used, and key features.',
      technologies: ['React', 'JavaScript', 'CSS'],
      status: 'Completed',
      link: '#'
    },
    {
      title: 'Project Two',
      description: 'Description of project two. This project demonstrates various skills and showcases your abilities in different areas.',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      status: 'In Progress',
      link: '#'
    },
    {
      title: 'Project Three',
      description: 'Add more projects as needed. Each project can have its own description, technologies, and status.',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      status: 'Planning',
      link: '#'
    }
  ]

  return (
    <div className="tab-content">
      <div className="container">
        <div className="content-section">
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle">
            A collection of projects I've worked on, showcasing my skills and experience
          </p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  <strong>Technologies:</strong>
                  <div className="tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                {project.link && project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    View Project
                    <span className="external-link">→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Todo List Application",
      description: "A responsive and interactive Todo List application built with React and Vite. Features include task creation, completion tracking, and priority setting.",
      image: "/react (1).jpeg",
      technologies: ["React", "Vite", "CSS", "LocalStorage"],
      github: "https://github.com/joymarupok/todolist",
      demo: "https://joyjoytodolist.netlify.app/"
    },
    {
      id: 2,
      title: "Pokemon Explorer with PokeAPI",
      description: "An interactive Pokemon application that uses the PokeAPI to display Pokemon information, stats, and abilities. Built with React and Vite for optimal performance.",
      image: "/react (2).jpeg",
      technologies: ["React", "Vite", "API Integration", "CSS"],
      github: "https://github.com/joymarupok/joypkmn",
      demo: "https://joypkmn.netlify.app/"
    }
  ];

  return (
    <section className="projects">
      <h2 className="section-title">My Projects</h2>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FontAwesomeIcon icon={faGithub} /> Code
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> Demo
                </a>
              </div>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

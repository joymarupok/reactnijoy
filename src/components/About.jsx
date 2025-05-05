import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faBootstrap, faPhp, faGitAlt, faCss3, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faUserGraduate, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
      <section className="experience-page">
        <h2 className="section-title">About Me</h2>
        
        <div className="experience-container">
          <div className="experience-section">
            <h3 className="experience-section-title">
              <FontAwesomeIcon icon={faInfoCircle} /> Profile
            </h3>
            
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <p>
                    I am a passionate web developer with expertise in front-end and back-end technologies.
                    My goal is to create efficient, user-friendly applications that solve real-world problems.
                    I enjoy learning new technologies and applying them to innovative projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="experience-section">
            <h3 className="experience-section-title">
              <FontAwesomeIcon icon={faCode} /> Technical Skills
            </h3>
            
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-skills">
                    <span><FontAwesomeIcon icon={faHtml5} /> HTML</span>
                    <span><FontAwesomeIcon icon={faCss3} /> CSS</span>
                    <span><FontAwesomeIcon icon={faJs} /> JavaScript</span>
                    <span><FontAwesomeIcon icon={faReact} /> React</span>
                    <span><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</span>
                    <span><FontAwesomeIcon icon={faDatabase} /> MySQL</span>
                    <span><FontAwesomeIcon icon={faPhp} /> PHP</span>
                    <span><FontAwesomeIcon icon={faGitAlt} /> Git</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="experience-section">
            <h3 className="experience-section-title">
              <FontAwesomeIcon icon={faUserGraduate} /> Education
            </h3>
            
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Bachelor of Science in Information Technology</h4>
                  <h5>Western Mindanao State University</h5>
                  <span className="timeline-date">2020 - Present</span>
                  <p>
                    Focusing on software development, web technologies, and information systems.
                    Relevant coursework includes programming, database management, web development, and system analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;

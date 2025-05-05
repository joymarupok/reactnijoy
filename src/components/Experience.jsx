import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  return (
    <section className="experience-page">
      <h2 className="section-title">My Experience</h2>
      
      <div className="experience-container">
        <div className="experience-section">
          <h3 className="experience-section-title">
            <FontAwesomeIcon icon={faBriefcase} /> Professional Experience
          </h3>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Project Manager</h4>
                <h5>SURV COMPANY</h5>
                <span className="timeline-date">2023 - Present</span>
                <p>
                  Leading software development projects from conception to completion.
                  Responsible for planning, executing, and closing projects while ensuring they are delivered on time, within scope, and within budget.
                  Coordinating with cross-functional teams and stakeholders to ensure project success.
                </p>
                <div className="timeline-skills">
                  <span>Project Planning</span>
                  <span>Team Leadership</span>
                  <span>Agile Methodology</span>
                  <span>Risk Management</span>
                  <span>Stakeholder Communication</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="experience-section">
          <h3 className="experience-section-title">
            <FontAwesomeIcon icon={faGraduationCap} /> Education
          </h3>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Bachelor of Science in Information Technology</h4>
                <h5>Western Mindanao State University</h5>
                <span className="timeline-date">2021 - Present</span>
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

export default Experience;

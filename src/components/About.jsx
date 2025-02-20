import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faHtml5, faNodeJs, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faMobile, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
      <section className="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="skills">
            <h3>Technical Skills</h3>
            <div className="skill-tags">
              <span className="skill-tag">
                <FontAwesomeIcon icon={faReact} /> React.js
              </span>
              <span className="skill-tag">
                <FontAwesomeIcon icon={faJs} /> JavaScript (ES6+)
              </span>
              <span className="skill-tag">
                <FontAwesomeIcon icon={faHtml5} /> HTML5 & CSS3
              </span>
              <span className="skill-tag">
                <FontAwesomeIcon icon={faNodeJs} /> Node.js
              </span>
              <span className="skill-tag">
                <FontAwesomeIcon icon={faDatabase} /> MongoDB
              </span>
              <span className="skill-tag">
                <FontAwesomeIcon icon={faGitAlt} /> Git
              </span>
              <span className="skill-tag">
                <FontAwesomeIcon icon={faMobile} /> Responsive Design
              </span>
              <span className="skill-tag">
                <FontAwesomeIcon icon={faPaintBrush} /> UI/UX Design
              </span>
            </div>
          </div>
          <div className="experience">
            <h3>Experience</h3>
            <div className="experience-card">
              <span className="experience-year">2020 - Present</span>
              <h4>Senior Frontend Developer</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <div className="experience-card">
              <span className="experience-year">2018 - 2020</span>
              <h4>Web Developer</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor metus justo, ut fringilla felis pharetra quis.</p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;

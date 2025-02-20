import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
    return (
      <section className="hero">
        <div className="hero-content-left">
          <span className="welcome-text">Welcome to my world</span>
          <h1 className="hero-name">Mary Joy Sanguila</h1>
          <h2 className="hero-title">Web Developer</h2>
          <p className="hero-description">
            Crafting exceptional digital experiences with modern web technologies and creative design solutions. Turning complex problems into elegant, intuitive interfaces.
          </p>
          <div className="hero-cta">
            <button className="primary-btn">View Portfolio</button>
            <button className="secondary-btn">Learn More</button>
          </div>
          <div className="social-links">
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        
        <div className="hero-content-right">
          <div className="profile-image-container">
            <img 
              src="joy.jpeg" 
              alt="Developer Profile" 
              className="profile-image"
            />
          </div>
        </div>
      </section>
    );
};

export default Hero;

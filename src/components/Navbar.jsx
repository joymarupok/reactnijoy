  import { Link } from 'react-router-dom';
  import { useState } from 'react';

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
      if (isOpen) setIsOpen(false);
    };

    return (
      <nav className="navbar">
        <div className="nav-brand">MJS</div>
      
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
          <Link to="/experience" className="nav-link" onClick={closeMenu}>Experience</Link>
          <Link to="/projects" className="nav-link" onClick={closeMenu}>Projects</Link>
          <Link to="/blog" className="nav-link" onClick={closeMenu}>Blog</Link>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
        </div>

        <div 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    );
  };

  export default Navbar;

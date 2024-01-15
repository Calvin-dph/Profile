import { Link } from 'react-router-dom';
import GsapMagnetic from '../GsapMagnetic'
import React from 'react';

function Navbar() {
  return (
    <div className="navbarct">
      <Link to='/'><span className="design-by">Design By </span></Link>
      <div className="nav-list">
        <GsapMagnetic>
          <div className="magnetnav">
            <span><Link to='about'>About</Link></span>
          </div>
        </GsapMagnetic>
        <GsapMagnetic>
          <div className="magnetnav">
            <span><Link to='project'>Resume</Link></span>
          </div>
        </GsapMagnetic>
        <GsapMagnetic>
          <div className="magnetnav">
            <span><Link to='contact'>Contact</Link></span>
          </div>
        </GsapMagnetic>
      </div>
    </div>
  );
}

export default Navbar;

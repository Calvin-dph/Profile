import GsapMagnetic from '../GsapMagnetic'
import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <a href="/"><span className="design-by">Design By </span></a>
      <div className="nav-list">
        <GsapMagnetic>
          <div className="magnetnav">
            <span><a href="/about">About</a></span>
          </div>
        </GsapMagnetic>
        <GsapMagnetic>
          <div className="magnetnav">
            <span><a href="/project">Resume</a></span>
          </div>
        </GsapMagnetic>
        <GsapMagnetic>
          <div className="magnetnav">
            <span><a href="/contact">Contact</a></span>
          </div>
        </GsapMagnetic>
      </div>
    </div>
  );
}

export default Navbar;

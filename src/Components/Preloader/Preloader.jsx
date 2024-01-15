import React from 'react';
import './preloader.css'
import { useEffect } from 'react';
import { preLoaderAnim } from '../../Animations/preloader';


function Preloader() {

  useEffect(() => {
    preLoaderAnim()
  }, [])

  return (
    <>
      <div className="preloader">
        <div className="texts-container">
          <span>Welcome,</span>
          <span>Calvin's</span>
          <span>Profile</span>
        </div>
      </div>
    </>
  );
}

export default Preloader;

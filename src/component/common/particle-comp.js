import React, { useEffect } from "react";
import Particles from "particlesjs";

const ParticleComponent = () => {
    useEffect(() => {
        const canvas = document.getElementById("canvas");
        if (!canvas) return;
    
        Particles.init
        ({
            selector:'.background'
          });
    }, []);
  
    // return (
    //   // eslint-disable-next-line react/jsx-no-comment-textnodes
    //   <div id="particles-js">

    //   Particle js test      </div>
    // );
  };
  
  export default ParticleComponent;
import React, {useEffect} from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    new Typewriter('#inprogress-container', {
      strings: ['In Progress...'],
      autoStart: true,
      loop: true,
      pauseFor: 15000,
    });
  });

  return (
    <div id="inprogress-container" className="text-5xl w-full h-full flex justify-center mt-60">
    </div>
  );
};

export default Contact;

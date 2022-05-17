import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  return (
    <div
      id="contact"
      className="m-10 flex container justify-center font-baskerville mt-24"
    >
      {/* <h1 id="contact">Contact Me</h1> */}
      <p className="flex justify-center mx-5 hover:scale-150">
        <a href="mailto:JDeering94@gmail.com">
          <div className="icon mx-3">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          Email
        </a>
      </p>
      <p className="flex justify-center py-1 mx-5 hover:scale-150">
        <a href="https://www.linkedin.com/in/joe-deering/">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            className="h-5 mx-5"
          />
          LinkedIn
        </a>
      </p>
      <p className="flex justify-center py-1 mx-5 hover:scale-150">
        <a href="https://github.com/jdeering94">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            className="h-5 mx-5"
          />
          Github
        </a>
      </p>
    </div>
  );
};

export default Contact;

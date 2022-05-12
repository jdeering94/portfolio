import React from 'react';
import icons from './helpers/arrays';

console.log(icons[0].src);

const Skills = () => {
  return (
    <div className="m-10 flex justify-around">
      <h1 id="skills">Skills</h1>
      <div className="skillIcons flex">
        {icons.map((icon) => (
          <img key={icon.id} src={icon.src} className="h-10 m-10" />
        ))}
      </div>
    </div>
  );
};

export default Skills;

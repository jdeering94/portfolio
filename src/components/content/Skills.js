import React from 'react';
import icons from './helpers/arrays';

console.log(icons[0].src);

const Skills = () => {
  return (
    <div className="m-10 flex justify-around font-baskerville">
      <h1 id="skills">Skills</h1>
      <div className="skillIcons container px-10 flex flex-wrap basis-1/3">
        {icons.map((icon) => (
          <img key={icon.id} src={icon.src} className="h-5 mx-5 sm:h-20" />
        ))}
      </div>
    </div>
  );
};

export default Skills;

import React from 'react';
import icons from './helpers/arrays';

console.log(icons[0].src);

const Skills = () => {
  return (
    <div className="flex justify-around font-baskerville container m-20">
      <h1 id="skills" className="text-4xl inset-0 py-24">
        Skills
      </h1>
      <div className="skillIcons container px-10 flex flex-wrap basis-2/3">
        {icons.map((icon) => (
          <div
            key={icon.id}
            // className="container flex justify-items-center items-center w-20 h-20"
            className="container group mx-auto w-1/5 p-4 relative"
          >
            <img
              src={icon.src}
              className="h-5 sm:h-20 w-full h-auto group-hover:grayscale group-hover:blur"
            />
            <p className="w-fit h-fit absolute top-1/4 left-1/4 p-2 opacity-0 group-hover:opacity-80 group-hover:bg-slate-600 font-black rounded-lg text-white">
              {icon.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

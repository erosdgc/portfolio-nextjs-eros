/* eslint-disable react/no-unescaped-entities */
import React from "react";
import MediaButtons from "./Shared/MediaButtons";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 bg-gray-200 py-1 px-2 w-fit mx-auto mt-[10vh] md:mt-0">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#CE7726]">Eros David</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front-end web developer specializing in building and designing
            digital experiences and solutions. I'm also a full-stack trainee,
            currently studying and learning day by day about amazing
            technologies to meet today's standards.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <MediaButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

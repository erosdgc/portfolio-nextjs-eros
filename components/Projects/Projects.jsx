/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ProjectItem from "./ProjectItem";
import AtlasCruzerImage from "../../public/assets/projects/atlas-cruzer.png";
import ConfBsAsImage from "../../public/assets/projects/bsas-conf.png";
import WeatherApiImage from "../../public/assets/projects/weather-api.png";
import RecordLabelImage from "../../public/assets/projects/record-label.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-[1.5rem] tracking-widest text-[#CE7726]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Atlas Cruzer – Cruises"
            backgroundImg={AtlasCruzerImage}
            projectUrl="/atlas-cruzer"
            builtIn="React JS | Javascript | Bootstrap | Firebase"
          />
          <ProjectItem
            title="Buenos Aires Conference"
            backgroundImg={ConfBsAsImage}
            projectUrl="/buenos-aires-conference"
            builtIn="HTML | Javascript | Bootstrap | PHP"
          />
          <ProjectItem
            title="Weather API"
            backgroundImg={WeatherApiImage}
            projectUrl="/weather-api"
            builtIn="HTML | Javascript | API Rest | Geolocation API | Bootstrap"
          />
          <ProjectItem
            title="STAR01 Recordings"
            backgroundImg={RecordLabelImage}
            projectUrl="/star01-recordings"
            builtIn="HTML | Javascript | Bootstrap"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

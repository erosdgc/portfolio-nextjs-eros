import Image from "next/image";
import React from "react";
import SkillItem from "./SkillItem";
import htmlImg from "../public/assets/skills/html.png";
import cssImg from "../public/assets/skills/css.png";
import bsImg from "../public/assets/skills/bootstrap-5.png";
import tailwindImg from "../public/assets/skills/tailwind.png";
import jsImg from "../public/assets/skills/javascript.png";
import reactImg from "../public/assets/skills/reactjs.png";
import nextImg from "../public/assets/skills/next-js.png";
import nodeImg from "../public/assets/skills/nodejs.png";
import firebaseImg from "../public/assets/skills/firebase.png";
import mysqlImg from "../public/assets/skills/mysql.png";
import insomniaImg from "../public/assets/skills/insomnia.png";
import mongodbImg from "../public/assets/skills/mongo.png";
import phpImg from "../public/assets/skills/php.png";
import laravelImg from "../public/assets/skills/laravel.png";
import gitImg from "../public/assets/skills/git.png";
import figmaImg from "../public/assets/skills/figma.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-[1.5rem] tracking-widest uppercase text-[#CE7726]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <SkillItem logoImg={htmlImg} title="HTML" />
          <SkillItem logoImg={cssImg} title="CSS" />
          <SkillItem logoImg={bsImg} title="Bootstrap" />
          <SkillItem logoImg={tailwindImg} title="Tailwind" />
          <SkillItem logoImg={jsImg} title="JavaScript" />
          <SkillItem logoImg={reactImg} title="React JS" />
          <SkillItem logoImg={nextImg} title="Next JS" />
          <SkillItem logoImg={nodeImg} title="Node JS" />
          <SkillItem logoImg={firebaseImg} title="Firebase" />
          <SkillItem logoImg={mysqlImg} title="MySQL" />
          <SkillItem logoImg={insomniaImg} title="Insomnia" />
          <SkillItem logoImg={mongodbImg} title="MongoDB" />
          <SkillItem logoImg={phpImg} title="PHP" />
          <SkillItem logoImg={laravelImg} title="Laravel" />
          <SkillItem logoImg={gitImg} title="Git" />
          <SkillItem logoImg={figmaImg} title="Figma" />
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import SkillItem from "./SkillItem";
import htmlImg from "../../public/assets/skills/html.png";
import cssImg from "../../public/assets/skills/css.png";
import bsImg from "../../public/assets/skills/bootstrap-5.png";
import tailwindImg from "../../public/assets/skills/tailwind.png";
import jsImg from "../../public/assets/skills/javascript.png";
import reactImg from "../../public/assets/skills/reactjs.png";
import nextImg from "../../public/assets/skills/next-js.png";
import nodeImg from "../../public/assets/skills/nodejs.png";
import firebaseImg from "../../public/assets/skills/firebase.png";
import mysqlImg from "../../public/assets/skills/mysql.png";
import insomniaImg from "../../public/assets/skills/insomnia.png";
import mongodbImg from "../../public/assets/skills/mongo.png";
import phpImg from "../../public/assets/skills/php.png";
import gitImg from "../../public/assets/skills/git.png";
import figmaImg from "../../public/assets/skills/figma.png";
import fl20Img from "../../public/assets/skills/fl20.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-2xl tracking-widest uppercase text-[#CE7726]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <SkillItem
            itemLink="https://developer.mozilla.org/en-US/docs/Web/HTML#:~:text=HTML%20(HyperText%20Markup%20Language)%20is,functionality%2Fbehavior%20(JavaScript)."
            logoImg={htmlImg}
            title="HTML"
          />
          <SkillItem
            itemLink="https://developer.mozilla.org/en-US/docs/Web/CSS#:~:text=CSS%20(Cascading%20Style%20Sheets)%20is,animations%20and%20other%20decorative%20features."
            logoImg={cssImg}
            title="CSS"
          />
          <SkillItem
            itemLink="https://getbootstrap.com/"
            logoImg={bsImg}
            title="Bootstrap"
          />
          <SkillItem
            itemLink="https://tailwindcss.com/"
            logoImg={tailwindImg}
            title="Tailwind"
          />
          <SkillItem
            itemLink="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            logoImg={jsImg}
            title="JavaScript"
          />
          <SkillItem
            itemLink="https://reactjs.org/"
            logoImg={reactImg}
            title="React JS"
          />
          <SkillItem
            itemLink="https://nextjs.org/"
            logoImg={nextImg}
            title="Next JS"
          />
          <SkillItem
            itemLink="https://nodejs.org/en/about/"
            logoImg={nodeImg}
            title="Node JS"
          />
          <SkillItem
            itemLink="https://firebase.google.com/"
            logoImg={firebaseImg}
            title="Firebase"
          />
          <SkillItem
            itemLink="https://www.mysql.com/"
            logoImg={mysqlImg}
            title="MySQL"
          />
          <SkillItem
            itemLink="https://insomnia.rest/"
            logoImg={insomniaImg}
            title="Insomnia"
          />
          <SkillItem
            itemLink="https://www.mongodb.com/"
            logoImg={mongodbImg}
            title="MongoDB"
          />
          <SkillItem
            itemLink="https://www.php.net/"
            logoImg={phpImg}
            title="PHP"
          />
          <SkillItem
            itemLink="https://git-scm.com/"
            logoImg={gitImg}
            title="Git"
          />
          <SkillItem
            itemLink="https://www.figma.com/"
            logoImg={figmaImg}
            title="Figma"
          />
          <SkillItem
            itemLink="https://www.image-line.com/"
            logoImg={fl20Img}
            title="FL Studio"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;

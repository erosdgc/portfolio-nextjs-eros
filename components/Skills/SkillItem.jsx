import Image from "next/image";
import React from "react";

const SkillItem = ({ itemLink, logoImg, title }) => {
  return (
    <div className="p-6 shadow-lg rounded hover:scale-105 hover:shadow-xl ease-in duration-200 cursor-pointer">
      <a
        target="_blank"
        href={itemLink}
        className="grid grid-cols-2 gap-4 justify-center items-center"
      >
        <div className="m-auto">
          <Image src={logoImg} alt="/" width="auto" height="64" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-lg">{title}</h3>
        </div>
      </a>
    </div>
  );
};

export default SkillItem;

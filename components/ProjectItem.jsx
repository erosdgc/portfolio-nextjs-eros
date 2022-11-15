import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, builtIn, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full rounded p-2 bg-gray-900 group shadow-lg hover:shadow-xl hover:bg-gradient-to-t from-gray-900 to-[#CE7726]">
      <Image
        className="rounded group-hover:opacity-10 ease-in duration-300"
        src={backgroundImg}
        alt="/"
      />
      <div className="opacity-0 group-hover:opacity-90 w-[75%] absolute ease-in duration-300">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{builtIn}</p>
        <Link className="" href={projectUrl}>
          <p className="mx-auto text-center py-3 rounded bg-white text-gray-700 font-bold text-lg w-[10rem] cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;

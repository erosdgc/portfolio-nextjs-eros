/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import RecordLabelImage from "../public/assets/projects/record-label.png";
import RecordLabelMobile from "../public/assets/projects/record-label-mobile.png";
import Link from "next/link";
import { BsCheck2Circle } from "react-icons/bs";

const recordLabel = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[40vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[40vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          fill
          objectFit="cover"
          src={RecordLabelImage}
          alt="/"
        />
        <div className="absolute top-[65%] md:top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-30%] text-white/95 z-10 py-2 px-8 xl:px-0">
          <h2 className="my-4">STAR01 Recordings</h2>
          <h3 className="text-xl">HTML | Javascript | Bootstrap</h3>
        </div>
      </div>
      <div className="max-w-[1240px] p-2 grid md:grid-cols-3 mx-auto px-8 xl:px-0 mt-6">
        <div className="col-span-2">
          <p className="uppercase tracking-widest text-[#CE7726] my-3">
            Project
          </p>
          <h2>Overview</h2>
          <p className="mt-5 md:mr-8">
            This was my first experience with software programming during the
            web development course at Coderhouse. It's a small personal project
            about a electronic music oriented record label that I plan to expand
            into something much bigger and real . Although the information part
            is static, it has some functions made with javascript, such as the
            color change of the navigation bar and the button displaying to go
            up after scrolling down a bit. Fully responsive design.
          </p>
          <p className="mt-3">It features a fully responsive design for every kind of display.</p>
          <div className="my-6">
            <h3 className="font-bold text-lg pb-2">Technologies</h3>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <BsCheck2Circle className="mr-2 text-[#CE7726]" /> HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsCheck2Circle className="mr-2 text-[#CE7726]" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <BsCheck2Circle className="mr-2 text-[#CE7726]" /> Bootstrap
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start my-8 md:my-0">
            <Link href="http://atlascruzer-app.netlify.app/">
              <button className="tracking-widest px-8 py-2 mr-6 rounded shadow-sm hover:shadow-lg ease-in duration-200">
                Demo
              </button>
            </Link>
            <Link href="https://github.com/erosdgc">
              <button className="tracking-widest px-8 py-2 rounded shadow-sm hover:shadow-lg ease-in duration-200">
                Code
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 mx-auto">
          <Image
            className="hover:scale-105 cursor-pointer ease-in duration-300"
            objectFit="cover"
            src={RecordLabelMobile}
            alt="/"
          />
        </div>
        <Link className="my-8 md:mt-[-50px]" href="/#projects">
          <button className="tracking-widest bg-gray-500 rounded py-2 px-5 shadow-sm hover:shadow-lg hover:bg-gray-600 ease-in duration-200">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default recordLabel;

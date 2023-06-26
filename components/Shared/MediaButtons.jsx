import Link from "next/link";
import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import EmailPopOver from "../Shared/EmailPopOver";

const MediaButtons = () => {
  return (
    <>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/erosdgc/"
      >
        <div className="rounded-full text-xl shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-200">
          <FaLinkedinIn />
        </div>
      </a>
      <a target="_blank" href="https://github.com/erosdgc">
        <div className="rounded-full text-xl shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-200">
          <FaGithub />
        </div>
      </a>

      <EmailPopOver />

      <Link href="/#about">
        <div className="rounded-full text-xl shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-200">
          <BsFillPersonLinesFill />
        </div>
      </Link>
    </>
  );
};

export default MediaButtons;

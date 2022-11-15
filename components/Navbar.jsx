/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#F7F7F7");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/atlas-cruzer" ||
      router.asPath === "/buenos-aires-conference" ||
      router.asPath === "/weather-api" ||
      router.asPath === "/star01-recordings"
    ) {
      setNavBg("");
      setLinkColor("#F7F7F7");
    } else {
      setNavBg("#F7F7F7");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full shadow-lg h-50 z-[100] ease-in duration-300 backdrop-blur bg-black/50"
          : "fixed w-full h-50 z-[100] ease-in duration-300"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 py-6 px-6">
        <Link href="/">
          <Image
            className="hover:scale-105 ease-in duration-200"
            src="/../public/assets/single-logo.png"
            alt="/"
            width="200"
            height="100"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex ">
            <Link href="/">
              <li className="ml-10 uppercase hover:border-b border-gray-500">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 uppercase hover:border-b border-gray-500">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 uppercase hover:border-b border-gray-500">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 uppercase hover:border-b border-gray-500">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 uppercase hover:border-b border-gray-500">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu style={{ color: `${linkColor}` }} size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black/60 ease-in duration-500"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#F7F7F7] py-8 px-5 ease-in duration-500"
              : "fixed right-[-150%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <div>
              <Link href="/" onClick={() => setNav(false)}>
                <Image
                  src="/../public/assets/single-logo.png"
                  alt="/"
                  width="100"
                  height="35"
                />
              </Link>
            </div>
            <div
              onClick={handleNav}
              className="rounded-full shadow shadow-gray-300 p-3 cursor-pointer text-white bg-[#CE7726]"
            >
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="border-b border-gray-300 my-5">
            <p className="w-[85%] md:w-[90%] py-4 ">
              Let's build something awesome together
            </p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/" onClick={() => setNav(false)}>
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about" onClick={() => setNav(false)}>
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills" onClick={() => setNav(false)}>
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#projects" onClick={() => setNav(false)}>
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/#contact" onClick={() => setNav(false)}>
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#CE7726]">
                Let's connect!
              </p>
              <div className="flex items-center justify-between my-2 w-full sm-w[%80]">
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                  <MdEmail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

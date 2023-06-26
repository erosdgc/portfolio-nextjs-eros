/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-2xl tracking-widest text-[#CE7726]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I'm from Rosario, Santa Fe, Argentina and I am a Chemical Technician
            and Music Producer. I also have studies in Physical Education and
            Sports Training.
          </p>
          <p className="py-2 text-gray-600">
            I'm currently working at 'JAR Computación', which is a recognized
            small/medium enterprise dedicated to the wholesale of computer
            supplies and hardware here in Rosario.
          </p>
          <p className="py-2 text-gray-600">
            {" "}
            I decided to change my career path and I am currently looking for my
            first experience in the IT world. I am learning and creating my own
            projects using technologies such as PHP, Node.js, MySQL, React JS,
            among other tools.
          </p>
          <p className="py-2 text-gray-600">
            I also really like training and enjoying music. I produce tracks of
            my own and am a sound quality enthusiast.
          </p>
          <p className="py-2 text-gray-600 ">
            <Link href="/#projects" className="underline cursor-pointer mr-10">
              Feel free to check out some of my projects!
            </Link>
          </p>
        </div>
        <div className="w-full h-auto m-auto flex items-center justify-center">
          <Image
            className="shadow-xl"
            src="/../public/assets/about.png"
            alt="/"
            width="500"
            height="500"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

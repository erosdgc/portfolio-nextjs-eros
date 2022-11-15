import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-[1.5rem] tracking-widest text-[#CE7726]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I'm from Rosario, Santa Fe, Argentina and I am a Chemical
            Technician. I also have studies in Physical Education and sports
            training.
          </p>
          <p className="py-2 text-gray-600">
            {" "}
            I decided to change my career path and I am currently looking for my
            first experience in the IT world. I am learning and creating my own
            projects using technologies such as PHP, Node.js, MySQL, React JS,
            among other languages.
          </p>
          <p className="py-2 text-gray-600">
            I really like training and enjoying music. I produce my own
            compositions and am a sound quality enthusiast.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Feel free to check out some of my projects!
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-sm rounded flex items-center justify-center p-1  hover:shadow-lg ease-in duration-200">
          <Image
            className="rounded"
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

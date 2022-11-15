import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { BsChevronDoubleUp, BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // const [email, setEmail] = useState("");
  // const sendEmail = async (e) => {
  //   e.preventDefault();
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_se43kxa",
        "template_indpdaz",
        form.current,
        "uICEoXm-fs8PJnZJU"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message successfull!!!!!1111 uno")
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-[1.5rem] tracking-widest text-[#CE7726]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl rounded p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded hover:shadow-lg ease-in duration-300"
                  src="/../public/assets/contact.jpg"
                  alt="/"
                  width="800"
                  height="800"
                />
              </div>
              <div>
                <h2 className="py-4">Eros David</h2>
                <p className="">Front-End Developer</p>
                <p className="py-4">
                  I am available for part time and full time positions. Feel
                  free to contact me if you require my services.
                </p>
              </div>
              <div>
                <p className="uppercase text-[#CE7726] tracking-widest pt-8">
                  Connect With Me
                </p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full text-xl shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="https://www.linkedin.com/in/erosdavidgomezcentofanti/">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                  <div className="rounded-full text-xl shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="https://github.com/erosdgc">
                      <FaGithub />
                    </Link>
                  </div>
                  <div className="rounded-full text-xl shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="mailto:gomezeros@gmail.com">
                      <MdEmail />
                    </Link>
                  </div>
                  <div className="rounded-full text-xl shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="/">
                      <BsFillPersonLinesFill />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl rounded lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 tracking-widest">
                      Name
                    </label>
                    <input
                      className="border-2 rounded p-2 flex border-gray-300 focus:border-[#CE7726]/80 focus:outline-none"
                      type="text"
                      name="from_name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 tracking-widest">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded p-2 flex border-gray-300 focus:border-[#CE7726]/80 focus:outline-none"
                      type="number"
                      name="from_number"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 tracking-widest">
                    Email
                  </label>
                  <input
                    className="border-2 rounded p-2 flex border-gray-300 focus:border-[#CE7726]/80 focus:outline-none"
                    type="email"
                    name="from_email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 tracking-widest">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded p-2 flex border-gray-300 focus:border-[#CE7726]/80 focus:outline-none"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 tracking-widest">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded p-2 border-gray-300 focus:border-[#CE7726]/80 focus:outline-none"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  value="Send"
                  // onClick={sendEmail}
                  className="w-full p-4 text-gray-100 rounded mt-4 shadow-sm hover:shadow-lg ease-in duration-300 tracking-widest"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-300 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsChevronDoubleUp className="text-[#CE7726]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

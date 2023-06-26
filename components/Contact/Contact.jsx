import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BsChevronDoubleUp, BsFillPersonLinesFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { Formik } from "formik";
import { BiMessageCheck } from "react-icons/bi";
import MediaButtons from "../Shared/MediaButtons";
import ContactMessage from "./ContactMessage";
import MessageButton from "./MessageButton";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [showModal]);

  const form = useRef();

  const sendEmail = (e, values) => {
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
          setShowModal(true);
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
                  src="/../public/assets/get-in-touch.png"
                  alt="/"
                  width="1600"
                  height="800"
                />
              </div>
              <div>
                <h2 className="my-4">Eros David</h2>
                <p>Front-End Developer</p>
                <p className="my-4">
                  I am available for part time and full time positions. Feel
                  free to contact me if you require my services.
                </p>
              </div>
              <div>
                <p className="uppercase text-[#CE7726] tracking-widest mt-10 lg:mt-36 lg:mb-0">
                  Connect With Me
                </p>
                <div className="flex items-center justify-between py-4 lg:py-0 lg:mt-2">
                  <MediaButtons />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl rounded lg:p-4">
            <div className="p-4">
              <Formik
                initialValues={{
                  from_name: "",
                  from_email: "",
                  subject: "",
                  message: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.from_name) {
                    errors.from_name = "Required";
                  }
                  if (!values.from_email) {
                    errors.from_email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.from_email
                    )
                  ) {
                    errors.from_email = "Invalid email address";
                  }
                  if (!values.subject) {
                    errors.subject = "Required";
                  }
                  if (!values.message) {
                    errors.message = "Required";
                  }
                  return errors;
                }}
                onSubmit={(
                  values,
                  { setSubmitting },
                  { resetForm },
                  { setShowModal }
                ) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    setShowModal(true);
                  }, 400);
                  setSubmitting(true);
                  sendEmail(values);
                  resetForm();
                }}
              >
                {({ isSubmitting, resetForm }) => (
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                      <div className="flex flex-col">
                        <label className="uppercase text-sm py-2 tracking-widest">
                          *Name
                        </label>
                        <input
                          className="border-2 rounded p-2 flex border-gray-300 focus:border-[#CE7726]/80 outline-none focus:ring-0 focus:shadow hover:border-[#CE7726]/80 ease-in duration-200"
                          type="text"
                          name="from_name"
                          maxLength="75"
                          required
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="uppercase text-sm py-2 tracking-widest">
                          Phone Number
                        </label>
                        <input
                          className="border-2 rounded p-2 flex border-gray-300 focus:border-[#CE7726]/80 outline-none focus:ring-0 focus:shadow hover:border-[#CE7726]/80 ease-in duration-200"
                          type="number"
                          name="from_number"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col py-2">
                      <label className="uppercase text-sm py-2 tracking-widest">
                        *Email
                      </label>
                      <input
                        className="border-2 rounded p-2 flex border-gray-300 focus:border-[#CE7726]/80 outline-none focus:ring-0 focus:shadow hover:border-[#CE7726]/80 ease-in duration-200"
                        type="email"
                        name="from_email"
                        maxLength="75"
                        required
                      />
                    </div>
                    <div className="flex flex-col py-2">
                      <label className="uppercase text-sm py-2 tracking-widest">
                        *Subject
                      </label>
                      <input
                        className="border-2 rounded p-2 flex border-gray-300 focus:border-[#CE7726]/80 outline-none focus:ring-0 focus:shadow hover:border-[#CE7726]/80 ease-in duration-200"
                        type="text"
                        name="subject"
                        maxLength="75"
                        required
                      />
                    </div>
                    <div className="flex flex-col py-2">
                      <ContactMessage onMessageSent={resetForm} />
                    </div>
                    <MessageButton disabled={isSubmitting} />
                  </form>
                )}
              </Formik>
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

import React, { useEffect, useState } from "react";
import { BiMessageCheck } from "react-icons/bi";

const ContactButton = (isSubmitting) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'visible';
  }, [showModal]);

  return (
    <div>
      <button
        disabled={isSubmitting}
        type="submit"
        value="Send"
        className="w-full p-4 bg-[#CE7726] text-gray-100 rounded mt-4 shadow-sm hover:shadow-lg ease-in duration-300 tracking-widest"
      >
        Send Message
      </button>
      {showModal ? (
        <div className="fixed inset-0 bg-black/25 backdrop-blur-sm flex justify-center items-center overflow-hidden">
          <div className="w-[90%] md:w-[700px] mx-auto flex flex-col bg-[#F7F7F7] p-10 rounded shadow-lg overflow-hidden">
            <BiMessageCheck size={70} className="text-[#CE7726] self-center" />
            <h2 className="my-5 self-center text-center text-xl md:text-2xl">
              Message sent succesfully!
            </h2>
            <button
              onClick={() => setShowModal(false)}
              className=" w-full mx-auto p-4 bg-[#CE7726] text-gray-100 rounded mt-4 shadow-sm hover:shadow-lg ease-in duration-300 tracking-widest"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ContactButton;

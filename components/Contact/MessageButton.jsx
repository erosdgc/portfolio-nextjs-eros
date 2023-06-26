import React, { useEffect, useState } from "react";

const MessageButton = ({ isSubmitting }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [showModal]);

  const handleSubmit = (e, resetForm) => {
    e.preventDefault();
    // Perform sending logic here, then call onMessageSent to indicate the message is sent
    // For demonstration purposes, we'll just log the message and call onMessageSent
    // console.log("Message sent:", message);
    setMessage("");
    resetForm(); // Reset form fields
    onMessageSent(); // Notify the parent component that the message is sent
  };

  return (
    <div>
      <button
        // onClick={() => setShowModal(true)}
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
            <BiMessageCheck size={65} className="text-[#CE7726] self-center" />
            <h2 className="my-5 self-center text-center text-xl md:text-2xl">
              Message sent succesfully!
            </h2>
            <button
              onClick={() => {
                handleSubmit();
                setShowModal(false);
              }}
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

export default MessageButton;

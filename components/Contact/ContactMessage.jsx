import React, { useState } from "react";

const ContactMessage = ({ onMessageSent }) => {
  const [message, setMessage] = useState("");
  const maxLength = 500;

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  const charactersLeft = maxLength - message.length;

  const handleSendMessage = () => {
    // Perform sending logic here, then call onMessageSent to indicate the message is sent
    // For demonstration purposes, we'll just log the message and call onMessageSent
    console.log("Message sent:", message);
    setMessage("");
    onMessageSent(); // Notify the parent component that the message is sent
  };

  return (
    <>
      <label className="uppercase text-sm py-2 tracking-widest">
        *Message ({charactersLeft})
      </label>
      <textarea
        className="border-2 rounded p-2 flex border-gray-300 focus:border-[#CE7726]/80 outline-none focus:ring-0 focus:shadow hover:border-[#CE7726]/80 ease-in duration-200"
        rows="10"
        name="message"
        maxLength={maxLength}
        required
        value={message}
        onChange={handleChangeMessage}
      ></textarea>
    </>
  );
};

export default ContactMessage;

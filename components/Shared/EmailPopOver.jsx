import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { MdEmail } from "react-icons/md";

const EmailPopOver = () => {
  return (
    <Popover placement="bottom">
      <PopoverHandler>
        <Button
          className="rounded-full text-xl shadow-lg p-6 cursor-pointer hover:scale-110 hover:bg-[#F7F7F7] ease-in duration-200 text-gray-800"
          variant="gradient"
        >
          <MdEmail />
        </Button>
      </PopoverHandler>
      <PopoverContent className="border-none rounded z-[9999]">
        <h3 className="border-b pb-1">Personal E-mail:</h3>
        <p className="pt-1">gomezeros@gmail.com</p>
      </PopoverContent>
    </Popover>
  );
};

export default EmailPopOver;

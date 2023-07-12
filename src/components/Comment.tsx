import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import user from "../assets/WhatsApp Image 2023-05-31 at 18.49.17.jpeg";

import { PiArrowFatDownBold, PiArrowFatUpBold } from "react-icons/pi";
import { BiComment } from "react-icons/bi";

const Comment = () => {
  return (
    <div className=" w-full flex-col flex gap-y-4">
      {/* owner comment */}
      <div className=" flex items-center gap-x-2">
        <Avatar className=" w-7 h-7">
          <AvatarImage src={user} alt="user" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className=" text-lg font-medium">u/Jono</p>
        <p className=" text-zinc-600 text-[13px] grid place-items-start translate-y-[1px]">50m ago</p>
      </div>
      {/* comment value */}
      <div className=" w-full flex-col">
        <div className=" w-full">
          <p className=" text-[15px]">Mantap lur</p>
        </div>
        {/* vote comment */}
        <div className=" w-full">
          <div className=" flex gap-x-2 items-center">
            <div className=" flex justify-between gap-x-1 items-center w-fit">
              <Button variant="ghost" size="sm">
                <PiArrowFatUpBold className=" md:w-[14px] md:h-[14px] w-4 h-4" />
              </Button>
              <span className=" font-semibold">1</span>
              <Button variant="ghost">
                <PiArrowFatDownBold className=" md:w-[14px] md:h-[14px] w-4 h-4" />
              </Button>
            </div>
            <div className=" flex gap-x-1 items-center">
              <BiComment className=" w-4 h-4 translate-y-[2px]" />
              <span className=" text-sm font-medium">Reply</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;

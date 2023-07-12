import React from "react";

import { PostProps } from "@/types/types";
import { PiArrowFatUpBold, PiArrowFatDownBold } from "react-icons/pi";
import { BiComment } from "react-icons/bi";
import { Button } from "./ui/button";

const CardPost: React.FC<PostProps> = ({ vote, id, heading, comment, community, content, img, owner }) => {
  return (
    <div className=" w-full bg-white flex flex-col rounded-md border border-gray-200" key={id}>
      <div className=" flex px-3 w-full h-fit p-5 gap-x-2">
        {/* vote */}
        <div className=" h-fit w-[9%]">
          <div className=" flex-col flex justify-between gap-y-1 w-full items-center">
            <Button variant="ghost">
              <PiArrowFatUpBold className=" md:w-5 md:h-5 w-4 h-4" />
            </Button>
            <span className=" font-semibold">{vote}</span>
            <Button variant="ghost">
              <PiArrowFatDownBold className=" md:w-5 md:h-5 w-4 h-4" />
            </Button>
          </div>
        </div>
        {/* content */}
        <div className=" flex-grow h-fit flex flex-col gap-y-2 items-start">
          <span className=" text-sm">{community}</span>
          <h1 className=" font-semibold text-lg md:text-xl">{heading}</h1>
          <p className=" text-sm">{content}</p>
        </div>
      </div>
      {/* comment */}
      <div className=" w-full py-4 px-6 bg-slate-50 flex gap-x-2 items-center">
        <BiComment className=" md:w-5 md:h-5 w-4 h-4" />
        <p className=" md:text-base text-sm">{comment} comments</p>
      </div>
    </div>
  );
};

export default CardPost;

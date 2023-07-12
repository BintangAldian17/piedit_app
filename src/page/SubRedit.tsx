import React, { useState } from "react";

import { LuImage } from "react-icons/lu";
import { BsLink } from "react-icons/bs";

import user from "../assets/WhatsApp Image 2023-05-31 at 18.49.17.jpeg";
import data from "../static/data.json";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import CardPost from "@/components/CardPost";
import { PostProps } from "@/types/types";
import CommunityCard from "@/components/CommunityCard";

const SubRedit = () => {
  const [input, setInput] = useState("");
  return (
    <div className=" w-full h-full pt-10 flex gap-x-3">
      {/* Post list */}
      <div className=" w-[63%] flex flex-col gap-y-5">
        {/* title sub redit */}
        <div className=" w-full py-2">
          <h1 className=" text-4xl font-bold">r/react</h1>
        </div>
        <div className=" w-full py-3 px-5 flex gap-x-4 bg-white rounded-md border border-gray-200 items-center">
          <div className=" flex gap-x-2 w-[75%] items-center">
            <Avatar className=" w-8 h-8">
              <AvatarImage src={user} alt="user" />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
            <div className=" w-full">
              <Input className=" h-fit" />
            </div>
          </div>
          <div className=" flex gap-x-4 flex-grow items-center justify-around px-5">
            <LuImage className=" w-6 h-6 text-zinc-500 " />
            <BsLink className=" w-6 h-6 text-zinc-500" />
          </div>
        </div>
        <div className=" w-full h-fit flex flex-col gap-y-4">
          {data.posts.map((post) => {
            return <CardPost {...post} key={post.id} />;
          })}
        </div>
      </div>
      <div className=" w-[30%] h-full">
        <CommunityCard createdAt="June 13 2023" members={8} community="react" />
      </div>
    </div>
  );
};

export default SubRedit;

import React, { useState } from "react";

import { AiOutlineHome } from "react-icons/ai";

import { PostProps } from "@/types/types";
import data from "../static/data.json";
import CardPost from "@/components/CardPost";
import { Button } from "@/components/ui/button";

const Feed: React.FC = () => {
  return (
    <div className=" flex flex-col h-full w-full gap-y-4">
      <h1 className=" text-4xl font-bold">Your feed</h1>
      <div className=" flex w-full h-full gap-x-3">
        {/* post card container */}
        <div className=" md:w-[68%] w-full h-full flex flex-col gap-y-5">
          {data?.posts.map((post: PostProps) => {
            return <CardPost {...post} key={post.id} />;
          })}
          {/* post card */}
        </div>
        {/* sidecontent */}
        <div className="md:flex w-[32%] h-full hidden ">
          <div className=" h-fit w-full flex flex-col rounded-md overflow-hidden border border-gray-300 bg-white">
            <div className=" px-4 py-6 bg-emerald-200 flex gap-x-2 items-center">
              <AiOutlineHome />
              <h1 className=" font-semibold">Home</h1>
            </div>
            <div className=" p-5 flex flex-col gap-y-4">
              <p className=" text-black/70">
                Your personal Nutedit frontpage. Come here to check in whit your favorite communities
              </p>
              <Button>Create Community</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;

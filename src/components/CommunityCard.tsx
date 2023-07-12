import React, { FC } from "react";
import { Button } from "./ui/button";

interface CommunityCardProps {
  community: string;
  createdAt: string;
  members: number;
}

const CommunityCard: FC<CommunityCardProps> = ({ community, createdAt, members }) => {
  return (
    <div className=" w-full h-fit rounded-md border border-gray-300 flex flex-col">
      <div className=" px-5 py-6 w-full">
        <h1 className=" font-semibold text-lg">About {community}</h1>
      </div>
      <div className=" w-full px-5 py-8 bg-white flex flex-col">
        <div className=" w-full flex justify-between pb-3 border-b border-zinc-300">
          <h2 className=" text-lg text-black/60">Created</h2>
          <h2 className=" text-lg ">{createdAt}</h2>
        </div>
        <div className=" w-full flex justify-between py-3">
          <h2 className=" text-lg text-black/60">{members}</h2>
          <h2 className=" text-lg ">8</h2>
        </div>
        <div className=" w-full flex flex-col gap-y-2 pb-2">
          <Button variant="default">Join to post</Button>
          <Button variant="secondary">Create Post</Button>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;

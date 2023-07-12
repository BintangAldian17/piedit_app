import { useState } from "react";

import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { PiArrowFatDownBold, PiArrowFatUpBold } from "react-icons/pi";

import data from "../static/data.json";

import { Button } from "@/components/ui/button";

import { PostProps } from "@/types/types";
import { Textarea } from "@/components/Textarea";
import Comment from "@/components/Comment";
import CommentLayout from "@/components/CommentLayout";
import { type } from "os";
import CommunityCard from "@/components/CommunityCard";

const DetailPost = () => {
  const [comment, setComment] = useState<string>("");
  const detailPost: PostProps = data.posts[0];

  return (
    <div className=" w-full h-full flex flex-col">
      {/* Button back community */}
      <div className=" w-full py-5">
        <Button className=" flex gap-x-2" variant="ghost">
          <span className=" w-4 h-4 relative">
            <MdOutlineArrowBackIosNew className=" w-full h-full translate-y-[1px]" />
          </span>
          <span className=" text-lg">Back to community</span>
        </Button>
      </div>
      <div className=" w-full h-full flex gap-x-3 justify-end">
        <div className=" h-fit w-[6%]">
          <div className=" flex-col flex justify-between gap-y-1 items-center w-fit">
            <Button variant="ghost">
              <PiArrowFatUpBold className=" md:w-5 md:h-5 w-4 h-4" />
            </Button>
            <span className=" font-semibold">{detailPost.comment}</span>
            <Button variant="ghost">
              <PiArrowFatDownBold className=" md:w-5 md:h-5 w-4 h-4" />
            </Button>
          </div>
        </div>
        {/* content */}
        <div className=" h-full w-[64%] bg-white border border-gray-300 rounded-md p-5 flex flex-col overflow-hidden gap-y-2">
          <div className=" w-full h-fit flex flex-col gap-y-3 border-b border-zinc-300 pb-12">
            <h3 className=" text-black/70">Posted by {detailPost.owner} 49m ago</h3>
            <h1 className=" font-semibold text-2xl">{detailPost.heading}</h1>
            <p>{detailPost.content}</p>
          </div>
          {/* Comment section */}
          <div className=" py-6 w-full h-fit flex flex-col gap-y-2">
            {/* Comment input */}
            <h1 className=" text-xl ">Your comment</h1>
            <Textarea commentValue={comment} setCommentValue={setComment} />
            <div className=" w-full flex justify-end">
              <Button disabled={!comment}>Post</Button>
            </div>
            {/* comment */}
            <CommentLayout />
          </div>
        </div>
        {/* side content */}
        <div className=" w-[31%] h-full">
          <CommunityCard createdAt="June 13 2023" members={8} community="react" />
        </div>
      </div>
    </div>
  );
};

export default DetailPost;

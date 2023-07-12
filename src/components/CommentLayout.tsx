import React from "react";
import Comment from "./Comment";

const CommentLayout = () => {
  return (
    <div className=" w-full flex flex-col gap-y-4">
      <div className=" w-full flex-col gap-y-1">
        <Comment />
        <div className=" w-full flex flex-col gap-y-2 border-l-2 border-zinc-400 ml-5 pl-3">
          <Comment />
          <Comment />
        </div>
      </div>
      <Comment />
    </div>
  );
};

export default CommentLayout;

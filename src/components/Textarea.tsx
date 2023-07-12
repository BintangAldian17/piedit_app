import React, { ChangeEvent, useEffect, useRef } from "react";

interface TextareaProps {
  commentValue: string;
  setCommentValue: (value: string) => void;
}

export const Textarea: React.FC<TextareaProps> = ({ commentValue, setCommentValue }) => {
  const commentRef = useRef<HTMLTextAreaElement>(null);
  // dynamic height input comment
  useEffect(() => {
    if (commentRef.current !== null) {
      commentRef.current.style.height = "90px";
      const scrollHeight = commentRef?.current.scrollHeight;
      commentRef.current.style.height = `${scrollHeight}px`;
    }
  }, [commentRef, commentValue]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(e.target.value);
  };
  return (
    <textarea
      className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] flex-grow border border-black/40 outline-none focus:border-gray-400 focus:border-2 rounded-md px-2 py-2
       h-fit resize-none"
      placeholder="What are your thoughts?"
      ref={commentRef}
      onChange={handleChange}
      value={commentValue}
    />
  );
};

import React, { FC, ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface DropdownNavProps {
  children: ReactNode;
}

const DropdownNav: FC<DropdownNavProps> = ({ children }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" outline-none">{children}</DropdownMenuTrigger>
      <DropdownMenuContent className=" lg:w-56">
        <DropdownMenuLabel>
          <div className=" flex flex-col gap-y-1">
            <h1 className=" text-[17px]">JonosilitMan</h1>
            <h2 className=" text-[15px] text-zinc-500">jono@gmail.com</h2>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem value="feed" className=" pl-2 text-[15px] cursor-pointer">
            Feed
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="feed" className=" pl-2 text-[15px] cursor-pointer">
            Create Community
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="feed" className=" pl-2 text-[15px] cursor-pointer">
            Settings
          </DropdownMenuRadioItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioItem value="feed" className=" pl-2 text-[15px] cursor-pointer">
            Sign Out
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownNav;

import { MoveLeft, Search, UserRoundPlus, Users } from "lucide-react";
import Link from "next/link";
import React from "react";

const NewChatPanel = () => {
  return (
    <div className="flex flex-col gap-5 w-full ">
      {/* Header  */}
      <div className="flex gap-3 items-center">
        <Link href="/chats">
          {" "}
          <MoveLeft />
        </Link>
        Chats
      </div>
      {/* Search Bar */}
      <div className="w-full border bg-hovergreen/50 border-bordergreen flex items-center gap-2 p-2 rounded-full">
        <Search size={20} className="ml-1" />
        <input placeholder="Search Chats" className="outline-0" />
      </div>
      {/* Add Buttons */}
      <Link
        href="/chats?mode=newchat&entry=single"
        className="flex items-center gap-4"
      >
        <div className="size-12 flex items-center justify-center rounded-full bg-green">
          <UserRoundPlus />
        </div>
        New Contact
      </Link>
      <div className="flex items-center gap-4">
        <div className="size-12 flex items-center justify-center rounded-full bg-green">
          <Users />
        </div>
        New Groups
      </div>
    </div>
  );
};

export default NewChatPanel;

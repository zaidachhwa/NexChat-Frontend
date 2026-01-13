import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const NewChatForm = () => {
  return (
    <div className="flex flex-col gap-5 w-full">
      {" "}
      {/* Header  */}
      <div className="flex gap-3 items-center">
        <Link href="/chats?mode=newchat">
          {" "}
          <MoveLeft />
        </Link>
        New Contact
      </div>
    </div>
  );
};

export default NewChatForm;

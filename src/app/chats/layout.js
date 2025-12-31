import SideBar from "@/components/SideBar";
import React from "react";

const ChatLayout = () => {
  return (
    <section className="w-full min-h-screen bg-green p-5 flex gap-5 text-fontgreen">
      {/* Sidebar  */}
      <SideBar />
      {/* Main section */}
      <main className="flex-1 bg-darkgreen rounded-xl flex">
        {/* Contact */}
        <div className="w-2/6 border-r-2 border-green"></div>
        {/* Main chats  */}
        <div className="w-full"></div>
      </main>
    </section>
  );
};

export default ChatLayout;

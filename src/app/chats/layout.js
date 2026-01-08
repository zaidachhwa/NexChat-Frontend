import SideBar from "@/components/SideBar";
import SidePanel from "@/components/SidePanel";
import React from "react";

const ChatLayout = ({ children }) => {
  return (
    <section className="w-full min-h-screen bg-green p-5 flex flex-col-reverse md:flex-row gap-5 text-fontgreen">
      {/* Sidebar  */}
      <SideBar />
      {/* Main section */}
      <main className="flex-1 bg-darkgreen rounded-xl flex">
        {/* Contact */}
        <div className="w-2/6 border-r-2 border-green p-4">
          <SidePanel />
        </div>
        {/* Main chats  */}
        <div className="w-full p-4">{children}</div>
      </main>
    </section>
  );
};

export default ChatLayout;

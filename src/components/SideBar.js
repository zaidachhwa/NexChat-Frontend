import {
  Archive,
  CircleFadingPlus,
  MessageCircleCode,
  Settings,
} from "lucide-react";
import React from "react";

const SideBar = () => {
  const sidebarIcons = [
    {
      icon: <MessageCircleCode size={26} />,
      desc: "Messaging",
    },
    {
      icon: <CircleFadingPlus size={26} />,
      desc: "Status",
    },
    {
      icon: <Archive size={26} />,
      desc: "Archived Chats",
    },
    {
      icon: <Settings size={26} />,
      desc: "Settings",
    },
  ];
  return (
    <aside className="min-w-20 min-h-full p-5 flex flex-col items-center justify-start">
      <div className="flex items-center justify-center gap-1">
        <span className="size-3 bg-icongreen/80 rounded-full"></span>
        <span className="size-3 bg-icongreen/80 rounded-full"></span>
        <span className="size-3 bg-icongreen/80 rounded-full"></span>
      </div>

      {/* Tray  */}
      <div className="flex flex-col space-y-10 mt-10 *:cursor-pointer">
        {sidebarIcons.map((item, index) => (
          <div key={index} className="relative group">
            <div>{item.icon}</div>
            <div className="bg-icongreen text-darkgreen shadow w-fit px-2 text-xs rounded-md p-1 absolute top-0 left-8 hidden group-hover:block">
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;

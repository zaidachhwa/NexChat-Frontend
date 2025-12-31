"use client";
import {
  Archive,
  CircleFadingPlus,
  MessageCircleCode,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  const sidebarIcons = [
    {
      icon: <MessageCircleCode size={26} />,
      desc: "Messaging",
      href: "/chats",
    },
    {
      icon: <CircleFadingPlus size={26} />,
      desc: "Status",
      href: "/chats/status",
    },
    {
      icon: <Archive size={26} />,
      desc: "Archived Chats",
      href: "/chats/archive",
    },
    {
      icon: <Settings size={26} />,
      desc: "Settings",
      href: "/chats/settings",
    },
  ];
  const path = usePathname();
  return (
    <aside className="min-w-16 max-w-16 min-h-full p-5 flex flex-col items-center justify-start">
      <div className="flex items-center justify-center gap-1">
        <span className="size-3 bg-icongreen/80 rounded-full"></span>
        <span className="size-3 bg-icongreen/80 rounded-full"></span>
        <span className="size-3 bg-icongreen/80 rounded-full"></span>
      </div>

      {/* Tray  */}
      <div className="flex flex-col justify-center space-y-6 mt-10 *:cursor-pointer">
        {sidebarIcons.map((item, index) => (
          <div
            key={index}
            className={`relative p-3 group transition rounded-full duration-400 ease-in-out ${
              path === item.href ? "bg-icongreen text-darkgreen " : ""
            }`}
          >
            <Link href={item.href}>{item.icon}</Link>
            <div
              className={`bg-icongreen text-darkgreen shadow w-fit px-2 text-xs rounded-md p-1 absolute top-3  hidden group-hover:block text-nowrap ${
                path === item.href ? "left-14" : "left-12"
              }`}
            >
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;

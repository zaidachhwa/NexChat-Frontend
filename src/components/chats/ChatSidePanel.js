"use client";
import { useUser } from "@/context/UserContext";
import { getChats } from "@/services/chat.service";
import { generateColor, generateColorOpacity } from "@/services/color.service";
import {
  Archive,
  ChevronDown,
  EllipsisVertical,
  MessageSquarePlus,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const ChatSidePanel = () => {
  const { chats, setChats, loading, setLoading, error, setError } = useUser();

  useEffect(() => {
    getChats(setChats, setLoading, setError);

    return () => setError(null);
  }, []);

  const onRetry = () => {
    getChats(setChats, setLoading, setError);
    if (chats) setError(null);
  };

  return (
    <div className="flex flex-col gap-5 w-full h-full items-start justify-start">
      <div className="flex items-center w-full justify-between">
        <h2 className="text-3xl font-medium tracking-wide font-poppins ">
          Chats
        </h2>
        <div className="flex gap-4">
          <Link href="/chats?mode=newchat">
            <MessageSquarePlus className="transition hover:text-icongreen/60 cursor-pointer" />
          </Link>
          <EllipsisVertical />
        </div>
      </div>
      {/* Search Bar */}
      <div className="w-full border bg-hovergreen/50 border-bordergreen flex items-center gap-2 p-2 rounded-full">
        <Search size={20} className="ml-1" />
        <input placeholder="Search Chats" className="outline-0" />
      </div>
      {/* Filters  */}
      <div className="flex items-center justify-start gap-2 text-sm *:cursor-pointer">
        {[
          {
            name: "All",
          },
          {
            name: "Unread",
          },
          {
            name: "Favourite",
          },
          {
            name: "Groups",
          },
        ].map((i, index) => (
          <div
            key={index}
            className="rounded-full p-1 px-3 flex items-center justify-center bg-hovergreen/50 border-bordergreen border  w-fit"
          >
            {i.name}
          </div>
        ))}
      </div>
      {/* Archived Chats  */}
      <div className="flex my-1 w-full items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <Archive size={20} />
          Archived
        </div>
        <span className="">4</span>
      </div>

      {/* Main Chats Block  */}
      <div className="w-full flex flex-col gap-5 overflow-auto">
        {error && (
          <div className="flex flex-col gap-2 items-center justify-center mt-10">
            <div>Failed to Load Chats</div>
            <div
              onClick={onRetry}
              className="bg-hovergreen rounded-xl p-1 cursor-pointer px-5"
            >
              Retry
            </div>
          </div>
        )}
        {loading
          ? Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between group hover:bg-hovergreen transition p-2 rounded-xl cursor-pointer"
              >
                <div className="flex w-full gap-3">
                  <span
                    className={` size-12 text-xl flex items-center justify-center rounded-full animate-pulse`}
                    style={{
                      color: generateColorOpacity(i),
                      backgroundColor: generateColor(i),
                    }}
                  ></span>
                  <div className="">
                    <h4 className="bg-hovergreen p-3 w-32 rounded animate-pulse"></h4>
                    <p className="text-sm bg-hovergreen mt-1 p-2 w-40 rounded animate-pulse"></p>
                  </div>
                </div>
                {/* Time */}
                <div className="flex flex-col gap-1 items-end">
                  <span className="text-xs text-nowrap bg-hovergreen p-2 w-10 rounded animate-pulse"></span>
                  <div className="flex items-center justify-center gap-2  transition duration-400">
                    <span className="size-5 flex items-center justify-center text-xs bg-green rounded-full shrink-0 animate-pulse"></span>
                    <span className="hidden group-hover:block">
                      <ChevronDown size={20} className="mt-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))
          : chats.map((chat, index) => (
              <div
                key={chat._id}
                className="flex items-center justify-between group hover:bg-hovergreen transition p-2 rounded-xl cursor-pointer"
              >
                <div className="flex w-full gap-3">
                  <span
                    className={` size-12 shrink-0 text-xl flex items-center justify-center rounded-full`}
                    style={{
                      color: generateColorOpacity(index),
                      backgroundColor: generateColor(index),
                    }}
                  >
                    {chat.otherUser.name.split("")[0]}
                  </span>
                  <div className="">
                    <h4>{chat.otherUser.name}</h4>
                    <p className="text-sm text-nowrap">
                      {chat?.lastMessage
                        ? chat.lastMessage.content.length > 18
                          ? chat.lastMessage.content.slice(0, 18) + " ..."
                          : chat.lastMessage.content
                        : "Tap to chat"}
                    </p>
                  </div>
                </div>
                {/* Time */}
                <div className="flex flex-col gap-1 items-end">
                  <span className="text-xs text-nowrap">
                    {new Date(chat.updatedAt).toLocaleString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </span>
                  <div className="flex items-center justify-center gap-2  transition duration-400">
                    <span className="size-5 flex items-center justify-center text-xs bg-green rounded-full shrink-0">
                      1
                    </span>
                    <span className="hidden group-hover:block">
                      <ChevronDown size={20} className="mt-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ChatSidePanel;

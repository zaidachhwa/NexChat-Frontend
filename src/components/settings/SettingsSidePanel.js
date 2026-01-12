"use client";
import {
  BellRing,
  ChevronRight,
  CircleUserRound,
  Database,
  Info,
  Lock,
  MessageSquareText,
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const tray = [
  {
    name: "Account",
    icon: <CircleUserRound />,
    slug: "accounts",
  },
  {
    name: "Privacy",
    icon: <Lock />,
    slug: "privacy",
  },
  {
    name: "Chats",
    icon: <MessageSquareText />,
    slug: "chats",
  },
  {
    name: "Notifications",
    icon: <BellRing />,
    slug: "notifications",
  },
  {
    name: "Storage & Data",
    icon: <Database />,
    slug: "store",
  },
];

const SettingsSidePanel = () => {
  const searchParams = useSearchParams();
  const option = searchParams.get("option");

  return (
    <div className="flex flex-col gap-5 w-full h-full items-start justify-start">
      <h2 className="text-3xl font-medium tracking-wide font-poppins ">
        Settings
      </h2>
      {/* Profile */}
      <Link
        href="/chats/settings"
        className="w-full flex items-center justify-between bg-hovergreen p-4 rounded-xl"
      >
        {/* Profile's Data  */}
        <div className="w-full flex gap-4 items-center justify-center">
          {/* Profile Image  */}
          <div className="size-16 bg-icongreen rounded-full shrink-0"></div>
          {/* Profile's Name  */}
          <div className="flex flex-col w-full font-roboto">
            <h3 className="text-xl font-medium text-gray-300">Zaid Achhwa</h3>
            <p className="text-sm tracking-wide">fjngbebgn</p>
          </div>
        </div>
        {/* Arrow */}
        <ChevronRight />
      </Link>

      {/* Options  */}
      <div className="flex flex-col gap-2 items-start justify-start w-full h-full *:cursor-pointer">
        {tray.map((i, index) => (
          <Link
            href={`/chats/settings?option=${i.slug}`}
            key={index}
            className={`${
              option === i.slug
                ? "bg-icongreen text-darkgreen"
                : "hover:bg-hovergreen"
            } flex w-full justify-between  p-3 rounded-lg transition-all ease-in-out duration-400`}
          >
            <span className="flex gap-4">
              {i.icon}
              {i.name}
            </span>

            <ChevronRight />
          </Link>
        ))}
        {/* Help  */}
        <div className="flex w-full mt-auto gap-4 hover:bg-hovergreen p-3 rounded-lg justify-self-end self-end">
          <Info />
          Help
        </div>
      </div>
    </div>
  );
};

export default SettingsSidePanel;

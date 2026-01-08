"use client";
import { usePathname } from "next/navigation";
import StatusSidePanel from "./status/StatusSidePanel";
import ChatSidePanel from "./chats/ChatSidePanel";
import ArchiveSidePanel from "./archive/ArchiveSidePanel";
import SettingsSidePanel from "./settings/SettingsSidePanel";

const SidePanel = () => {
  const path = usePathname();

  if (path === "/chats/status") {
    return <StatusSidePanel />;
  } else if (path === "/chats/archive") {
    return <ArchiveSidePanel />;
  } else if (path === "/chats/settings") {
    return <SettingsSidePanel />;
  } else {
    return <ChatSidePanel />;
  }
};

export default SidePanel;

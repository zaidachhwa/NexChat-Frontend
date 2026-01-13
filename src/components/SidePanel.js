"use client";
import { usePathname, useSearchParams } from "next/navigation";
import StatusSidePanel from "./status/StatusSidePanel";
import ChatSidePanel from "./chats/ChatSidePanel";
import ArchiveSidePanel from "./archive/ArchiveSidePanel";
import SettingsSidePanel from "./settings/SettingsSidePanel";
import NewChatPanel from "./chats/NewChatPanel";
import NewChatForm from "./chats/NewChatForm";

const SidePanel = () => {
  const path = usePathname();
  const searchParams = useSearchParams();

  const mode = searchParams.get("mode");
  const entry = searchParams.get("entry");

  if (path === "/chats/status") {
    return <StatusSidePanel />;
  } else if (path === "/chats/archive") {
    return <ArchiveSidePanel />;
  } else if (path === "/chats/settings") {
    return <SettingsSidePanel />;
  } else if (mode === "newchat") {
    if (entry && entry === "single") {
      return <NewChatForm />;
    }
    return <NewChatPanel />;
  } else {
    return <ChatSidePanel />;
  }
};

export default SidePanel;

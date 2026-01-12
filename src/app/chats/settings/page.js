"use client";

import Accounts from "@/components/settings/Accounts";
import Chats from "@/components/settings/Chats";
import Notifications from "@/components/settings/Notifications";
import Privacy from "@/components/settings/Privacy";
import Storage from "@/components/settings/Storage";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();

  const option = searchParams.get("option");

  console.log(option);

  if (option === "accounts") {
    return <Accounts />;
  } else if (option === "chats") {
    return <Chats />;
  } else if (option === "notifications") {
    return <Notifications />;
  } else if (option === "privacy") {
    return <Privacy />;
  } else if (option === "store") {
    return <Storage />;
  } else {
    return <div>This is the setting page</div>;
  }
  return;
};

export default Page;

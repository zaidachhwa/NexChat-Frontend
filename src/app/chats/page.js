"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

const Page = () => {
  const { user, loading, router } = useAuth();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user, router]);

  return <div></div>;
};

export default Page;

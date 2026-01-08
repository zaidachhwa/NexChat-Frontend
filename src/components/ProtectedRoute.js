"use client";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user, token, router } = useAuth();

  useEffect(() => {
    if (!token && !user) {
      return router.push("/login");
    }
  }, [token, user, router]);

  if (!user) return null;

  return children;
};

export default ProtectedRoute;

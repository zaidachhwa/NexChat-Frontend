"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// For wrapping the main parent component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (typeof window === "undefined") return null;

    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState(() => {
    if (typeof window === "undefined") return null;

    const accessToken = localStorage.getItem("accessToken");
    return accessToken ? accessToken : null;
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <AuthContext.Provider
      value={{ router, user, setUser, loading, setLoading, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// For using the value in other components
export const useAuth = () => useContext(AuthContext);

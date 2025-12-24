"use client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// For wrapping the main parent component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <AuthContext.Provider
      value={{ router, user, setUser, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// For using the value in other components
export const useAuth = () => useContext(AuthContext);

"use client";
import { createContext, useContext, useState } from "react";

const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <userContext.Provider
      value={{ chats, setChats, loading, setLoading, error, setError }}
    >
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);

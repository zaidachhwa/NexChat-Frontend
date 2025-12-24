// Register

import api from "@/api/axios";
import toast from "react-hot-toast";

export const registerUser = async (data, router, setLoading) => {
  setLoading(true);
  try {
    const res = await api.post("/auth/register", data);
    const msg = res.data?.message;
    toast.success(msg);
    router.push("/login");
    return res.data;
  } catch (error) {
    const err = error?.response?.data?.message;
    toast.error(err || "Server Error");

    return error?.response?.data?.message;
  } finally {
    setLoading(false);
  }
};

export const loginUser = async (data, router, setLoading, setUser) => {
  setLoading(true);
  try {
    const res = await api.post("/auth/login", data);
    const msg = res.data?.message;
    toast.success(msg);

    // Save User data and token
    setUser(res.data?.user);
    localStorage.setItem("user", JSON.stringify(res.data?.user));
    localStorage.setItem("accessToken", res.data?.user?.accessToken);

    router.push("/chats");
    return res.data;
  } catch (error) {
    const err = error?.response?.data?.message;
    toast.error(err || "Server Error");
    return error?.response?.data?.message;
  } finally {
    setLoading(false);
  }
};

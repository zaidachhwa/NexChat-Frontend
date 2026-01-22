import api from "@/api/axios";
import { getToken } from "./token.service";

export const getChats = async (setChats, setLoading, setError) => {
  setLoading(true);
  try {
    const res = await api.get("/chat/my", {
      headers: {
        Authorization: `Bearer ${getToken("accessToken")}`,
      },
    });

    setChats(res.data.chats);
    return res.data.chats;
  } catch (err) {
    console.log(err);
    setError(err);
    return err;
  } finally {
    setTimeout(() => setLoading(false), 1000);
  }
};

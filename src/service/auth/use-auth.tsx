import { useMutation } from "@tanstack/react-query";
import { discordAuthWithCode } from "./auth";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useUserStore } from "../../store/user/use-user-store";

export function useAuth() {
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  const discordAuth = useMutation({
    mutationFn: discordAuthWithCode,
    onSuccess(data) {
      const { username, email, avatarUrl, accessToken } = data;

      Cookies.set("username", username);
      Cookies.set("email", email);
      Cookies.set("avatarUrl", avatarUrl);
      Cookies.set("token", accessToken);

      setUser({ username, email, avatarUrl });
      navigate("/");
    },
    onError() {
      toast.error("Erro ao tentar logar pelo discord");
      navigate("/");
    },
  });

  function signOut() {
    Cookies.remove("username");
    Cookies.remove("email");
    Cookies.remove("avatarUrl");
    Cookies.remove("token");
    setUser({ username: "", email: "", avatarUrl: "" });
  }

  return {
    discordAuth,
    signOut,
  };
}

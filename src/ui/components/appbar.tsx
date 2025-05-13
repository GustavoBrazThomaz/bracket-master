import { ReactNode, useEffect } from "react";
import { Link } from "react-router";
import { useAuth } from "../../service/auth/use-auth";
import { useUserStore } from "../../store/user/use-user-store";
import Cookies from "js-cookie";
import { DiscordIcon } from "../icons/discord-icon";
import { ENVIRONMENT } from "../../config/environment";

export function AppBar({ children }: Readonly<{ children: ReactNode }>) {
  const { signOut } = useAuth();
  const {
    user: { username, avatarUrl },
    setUser,
  } = useUserStore();

  function authWithDiscord() {
    window.location.href = `https://discord.com/oauth2/authorize?client_id=${ENVIRONMENT.DISCORD_OAUTH_ID}&response_type=code&redirect_uri=${ENVIRONMENT.DISCORD_OAUTH_REDIRECT_URL}&scope=email+identify`;
  }

  useEffect(() => {
    setUser({
      username: Cookies.get("username") ?? "",
      email: Cookies.get("email") ?? "",
      avatarUrl: Cookies.get("avatarUrl") ?? "",
    });
  }, []);

  return (
    <>
      <div className="py-4 px-32 w-full fixed top-0 flex justify-between bg-black items-center text-white z-10">
        <Link to={"/"} className="text-bold text-lg cursor-pointer">
          BracketMaster
        </Link>

        {username ? (
          <div className="flex gap-2 items-center">
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img src={avatarUrl} alt={`image_from_${username}`} />
              </div>
            </div>
            {username}

            <button
              onClick={signOut}
              className="text-white hover:underline cursor-pointer ml-8"
            >
              Sair
            </button>
          </div>
        ) : (
          <button
            onClick={authWithDiscord}
            className="btn btn-neutral bg-[#717AF7] hover:bg-[#5964ff] flex gap-2 items-center "
          >
            Entrar pelo Discord
            <DiscordIcon />
          </button>
        )}
      </div>
      {children}
    </>
  );
}

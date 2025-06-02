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
      <div className="py-2 px-8 w-full fixed top-0 flex justify-center bg-base-100 shadow text-black items-center z-10">
        <div className="w-full container flex justify-between items-center ">
          <Link to={"/"} className="text-bold text-xl cursor-pointer">
            BracketMaster
          </Link>

          {username ? (
            <div className="flex gap-2 items-center">
              <details className="dropdown dropdown-bottom dropdown-end">
                <summary className="btn bg-white border-none m-1">
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img src={avatarUrl} alt={`image_from_${username}`} />
                    </div>
                  </div>
                  {username}
                </summary>
                <ul className="menu dropdown-content bg-base-100 text-black rounded-box z-1 w-52 p-2 shadow-sm">
                  <li>
                    <Link to={"profile"}>Perfil</Link>
                  </li>
                  <li>
                    <button
                      onClick={signOut}
                      className=" hover:underline cursor-pointer"
                    >
                      Sair
                    </button>
                  </li>
                </ul>
              </details>
            </div>
          ) : (
            <button
              onClick={authWithDiscord}
              className="btn text-white bg-[#717AF7] hover:bg-[#5964ff] flex gap-2 items-center "
            >
              Entrar pelo Discord
              <DiscordIcon />
            </button>
          )}
        </div>
      </div>
      {children}
    </>
  );
}

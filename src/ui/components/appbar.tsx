import { ReactNode} from "react";
import { Link } from "react-router";
import { useAuth } from "../../service/auth/use-auth";
import { useUserStore } from "../../store/user/use-user-store";

export function AppBar({ children }: Readonly<{ children: ReactNode }>) {
  const { signOut } = useAuth();
  const {
    user: { username, avatarUrl },
  } = useUserStore();

  function authWithDiscord() {
    window.location.href =
      "https://discord.com/oauth2/authorize?client_id=1346994909596356811&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3553%2Fdiscord%2Fcallback&scope=email+identify";
  }

  return (
    <>
      <div className="py-2 px-32 w-full fixed top-0 flex justify-between bg-base-200 items-center">
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

            <button onClick={signOut} className="btn btn-ghost">
              Sair
            </button>
          </div>
        ) : (
          <button onClick={authWithDiscord} className="btn btn-neutral">
            Entrar pelo Discord
          </button>
        )}
      </div>
      <div className="mt-20 px-32 h-full w-full">{children}</div>
    </>
  );
}

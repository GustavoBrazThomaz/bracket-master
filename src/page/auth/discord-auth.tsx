import { useNavigate, useSearchParams } from "react-router";
import { useAuth } from "../../service/auth/use-auth";
import { useEffect } from "react";

export function DiscordAuth() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const { discordAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!code) {
      navigate("/");
      return;
    }

    discordAuth.mutate(code);
  }, []);

  if (!code || discordAuth.error) return <p>Error</p>;

  return <div>Auth</div>;
}

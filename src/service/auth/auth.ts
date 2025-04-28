import { API } from "../../config/API";
import { DiscordAuthResponse } from "./type";

export async function discordAuthWithCode(
  discordCode: string
): Promise<DiscordAuthResponse> {
  const { data } = await API.post("/auth/discord-code", { code: discordCode });

  return {
    username: data.username,
    accessToken: data.accessToken,
    avatarUrl: data.avatarUrl,
    email: data.email,
  };
}

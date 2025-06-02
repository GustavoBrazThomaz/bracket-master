import { API } from "../../config/API";
import { Team } from "./types";

export async function postNewTeam(newTeam: {
  name: string;
  description: string;
}): Promise<Team> {
  const { data } = await API.post(`/teams`, newTeam);
  return data;
}

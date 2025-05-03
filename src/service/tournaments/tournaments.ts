import { API } from "../../config/API";
import { PaginationInput } from "../../types/pagination";
import { TournamentFormSchema } from "../../ui/forms/tournament-form/tournament-form.validator";
import { Tournament, TournamentResponse } from "./types";

export async function getTournaments({
  page,
  size,
  sort,
}: PaginationInput): Promise<TournamentResponse> {
  const { data } = await API.get(
    `/tournaments?page=${page}&size=${size}&sort=${sort}`
  );
  return data;
}

export async function getTournamentById({
  id,
}: {
  id: string;
}): Promise<Tournament> {
  const { data } = await API.get(`/tournaments/${id}`);
  return data;
}

export async function postNewTournament(form: TournamentFormSchema) {
  const { data } = await API.post("/tournaments", form);
  return data;
}

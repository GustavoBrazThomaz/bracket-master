import { useQuery } from "@tanstack/react-query";
import { getTournamentParticipants } from "./tournaments";

export function useGetTournamentParticipants(tournamentId: string) {
  const participants = useQuery({
    queryKey: ["getParticipants", tournamentId],
    queryFn: () => getTournamentParticipants(tournamentId),
  });

  return { ...participants };
}

import { useQuery } from "@tanstack/react-query";
import { getTournamentById } from "../tournaments/tournaments";

export function useGetTournamentById(id: string) {
  const tournament = useQuery({
    queryKey: ["fetchTournament", id],
    queryFn: async () => {
      const response = await getTournamentById({ id });
      return response;
    },
  });

  return { ...tournament };
}

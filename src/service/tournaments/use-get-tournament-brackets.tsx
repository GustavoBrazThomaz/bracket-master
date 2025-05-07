import { useQuery } from "@tanstack/react-query";
import { getTournamentBracket } from "./tournaments";

export function useGetTournamentBrackets(id: string) {
  const tournament = useQuery({
    queryKey: ["fetchBrackets", id],
    queryFn: async () => {
      const response = await getTournamentBracket(id);
      return response;
    },
  });

  return { ...tournament };
}

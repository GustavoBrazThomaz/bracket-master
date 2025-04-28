import { useQuery } from "@tanstack/react-query";
import { getTournaments } from "../tournaments/tournaments";
import { PaginationInput } from "../../types/pagination";

export function useGetTournaments(input: PaginationInput) {
  const tournaments = useQuery({
    queryKey: ["fetchTournaments"],
    queryFn: async () => {
      const response = await getTournaments(input);
      return response;
    },
  });

  return { ...tournaments };
}

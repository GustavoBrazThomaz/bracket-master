import { useQuery } from "@tanstack/react-query";
import { getTournaments } from "../tournaments/tournaments";
import { PaginationInput } from "../../types/pagination";

export function useGetTournaments(input: PaginationInput, key?: string) {
  const tournaments = useQuery({
    queryKey: ["fetchTournaments", key],
    queryFn: async () => {
      const response = await getTournaments(input);
      return response;
    },
  });

  return { ...tournaments };
}

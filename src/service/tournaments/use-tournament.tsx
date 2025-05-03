import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postNewTournament } from "./tournaments";
import { useNavigate } from "react-router";

export function useTournament() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const newTournament = useMutation({
    mutationFn: postNewTournament,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["fetchTournaments"] });
      navigate("/");
    },
  });

  return { newTournament };
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  postGenerateBracket,
  postNewTournament,
  postParticipantInToTournament,
} from "./tournaments";
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

  const registerParticipant = useMutation({
    mutationFn: postParticipantInToTournament,
    onSuccess(_, variables) {
      queryClient.invalidateQueries({
        queryKey: ["getParticipants", variables],
      });
    },
  });

  const generateBracket = useMutation({
    mutationFn: postGenerateBracket,
  });

  return { newTournament, registerParticipant, generateBracket };
}

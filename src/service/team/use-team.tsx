import { useMutation } from "@tanstack/react-query";
import { postNewTeam } from "./team";

export function useTeam() {
  const newTeam = useMutation({
    mutationFn: postNewTeam,
  });

  return { newTeam };
}

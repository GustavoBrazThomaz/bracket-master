import { useForm } from "react-hook-form";
import { newTeamFormSchema, NewTeamFormSchema } from "./new-team-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTeam } from "../../../service/team/use-team";
import { closeModal } from "../../../utils/modal";

export function NewTeamModal() {
  const { register, handleSubmit } = useForm<NewTeamFormSchema>({
    resolver: zodResolver(newTeamFormSchema),
  });

  const { newTeam } = useTeam();

  function submitForm(data: NewTeamFormSchema) {
    newTeam.mutate(data);
    closeModal("new_team_modal");
  }

  return (
    <dialog id="new_team_modal" className="modal">
      <div className="modal-box">
        <form
          onSubmit={handleSubmit(submitForm)}
          method="dialog"
          className="fieldset bg-white w-full [&_input]:w-full [&_input]:mb-1"
        >
          <label className="label">Nome</label>
          <input
            {...register("name")}
            type="text"
            className="input"
            placeholder="Modalidade"
          />

          <label className="label">Descrição</label>
          <textarea
            {...register("description")}
            className="textarea w-full"
            placeholder="Modalidade"
          />

          <button type="submit" className="btn btn-neutral mt-4">
            Criar time
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

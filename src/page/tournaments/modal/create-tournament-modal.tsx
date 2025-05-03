import { TournamentForm } from "../../../ui/forms/tournament-form/tournament-form";

export function CreateTournamentModal() {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Criar Campeonato</h3>
        <TournamentForm modalId="my_modal_1" />
      </div>
    </dialog>
  );
}

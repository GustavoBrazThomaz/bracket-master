import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTournament } from "../../../service/tournaments/use-tournament";
import {
  TournamentFormSchema,
  tournamentFormSchema,
} from "./tournament-form.validator";
import { closeModal } from "../../../utils/modal";

interface Props {
  modalId?: string;
}

export function TournamentForm({ modalId }: Props) {
  const { register, handleSubmit, watch } = useForm<TournamentFormSchema>({
    resolver: zodResolver(tournamentFormSchema),
  });

  const { newTournament } = useTournament();
  function submitForm(data: TournamentFormSchema) {
    newTournament.mutate(data);

    if (modalId) closeModal(modalId);
  }

  return (
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
        placeholder="Nome"
      />

      <label className="label">Descrição</label>
      <input
        {...register("description")}
        type="text"
        className="input"
        placeholder="Descrição"
      />

      <label className="label">Modalidade</label>
      <input
        {...register("modality")}
        type="text"
        className="input"
        placeholder="Modalidade"
      />

      <label className="label">Prêmio</label>
      <input
        {...register("prizePool")}
        type="text"
        className="input"
        placeholder="Prêmio"
      />

      <div className="flex gap-4 ">
        <div className="w-full max-w-1/2 flex flex-col">
          <label className="label mb-1">Limite de participantes</label>
          <input
            type="number"
            {...register("registrationLimit")}
            className="input"
            placeholder="Limite de participantes"
            title="Limite de participantes"
          />
        </div>

        <label className="label mt-4">
          <input
            type="checkbox"
            defaultChecked
            {...register("isOpen")}
            className="toggle max-w-[40px]"
          />
          Aberto para o público
        </label>
      </div>

      <div className="flex gap-4">
        <div className="w-full max-w-1/2 flex flex-col">
          <label className="label mb-1">Tamanho do time</label>
          <input
            type="number"
            className="input"
            {...register("teamSize")}
            placeholder="Tamanho do time"
            title="Tamanho do time"
            disabled={watch("isIndividual")}
          />
        </div>

        <label className="label mt-4">
          <input
            type="checkbox"
            {...register("isIndividual")}
            className="toggle max-w-[40px]"
          />
          Torneio individual?
        </label>
      </div>

      <label className="label">Data do torneio</label>
      <input type="datetime-local" className="input" {...register("date")} />

      <label className="label">Regras</label>
      <textarea
        {...register("rules")}
        className="textarea w-full"
        placeholder="Regras"
      />

      <div className="flex gap-4 w-full">
        {modalId && (
          <button
            onClick={() => closeModal(modalId ?? "")}
            type="button"
            className="btn btn-outline mt-4 w-[48.5%]"
          >
            Fechar
          </button>
        )}

        <button
          type="submit"
          className={`btn btn-neutral mt-4 ${
            modalId ? "w-[48.5%] " : "w-full"
          }`}
        >
          Criar
        </button>
      </div>
    </form>
  );
}

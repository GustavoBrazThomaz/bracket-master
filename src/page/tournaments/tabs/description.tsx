import dayjs from "dayjs";
import { User, Users } from "lucide-react";
import { Tournament } from "../../../service/tournaments/types";
import { hasDatePassed } from "../../../utils/hasDatePassed";

export function TournamentDescription({
  tournament,
}: {
  tournament: Tournament;
}) {
  return (
    <div className="flex justify-center flex-col w-full">
      <div className="flex justify-between">
        <div>
          <p className="text-xl font-bold">{tournament.name}</p>
          <p>{tournament.description}</p>
        </div>

        <button
          disabled={
            !tournament.isOpen || hasDatePassed(tournament?.date ?? new Date())
          }
          className="btn btn-neutral"
        >
          Entrar no torneio
        </button>
      </div>

      <p className="text-lg font-bold mt-4">Modalidade</p>
      <p>{tournament.modality}</p>
      <p className="text-lg font-bold mt-4">Participantes</p>
      <p>
        {tournament.participants ?? 0}/{tournament.registrationLimit}
      </p>
      <p className="text-lg font-bold mt-4">Tamanho da equipe</p>
      <div>
        {tournament.isIndividual ? (
          <div className="tooltip" data-tip="Individual">
            <p className="flex">
              <User /> 1
            </p>
          </div>
        ) : (
          <div className="tooltip" data-tip="Membros por time">
            <p className="flex">
              <Users /> {tournament.teamSize}
            </p>
          </div>
        )}
      </div>
      <p className="text-lg font-bold mt-3">Data</p>
      <p>{dayjs(tournament?.date).format("DD/MM/YYYY")}</p>

      <p className="text-lg font-bold mt-4">Prêmio</p>
      <p className="text-bold">{tournament.prizePool}</p>

      <p className="text-lg font-bold mt-4">Regras</p>
      <p>{tournament.rules}</p>
    </div>
  );
}

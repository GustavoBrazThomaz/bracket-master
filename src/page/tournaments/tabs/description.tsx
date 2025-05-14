import { Clipboard, Info, Timer, Trophy, User, Users } from "lucide-react";
import { Tournament } from "../../../service/tournaments/types";

export function TournamentDescription({
  tournament,
}: {
  tournament: Tournament;
}) {
  return (
    <div className="flex justify-center flex-col w-full p-8 border border-base-300 rounded-lg">
      <p className="text-2xl font-bold">Sobre o Campeonato</p>
      <p className="text-gray-500">Informações detalhadas sobre o torneio</p>

      <p className="text-lg flex gap-2 items-center mt-4">
        <Info className="size-4" /> Descrição
      </p>
      <p className="text-gray-500">{tournament.description}</p>

      <p className="text-lg flex gap-2 items-center mt-4">
        <Clipboard className="size-4" /> Tamanho da equipe
      </p>
      <div className="text-gray-500">
        {tournament.isIndividual ? (
          <div className="tooltip" data-tip="Individual">
            <p className="flex">
              <User /> 1
            </p>
          </div>
        ) : (
          <div className="tooltip" data-tip="Membros por time">
            <p className="flex gap-2">
              <Users /> {tournament.teamSize}
            </p>
          </div>
        )}
      </div>

      <p className="text-lg flex gap-2 items-center mt-4">
        <Trophy className="size-4" /> Prêmio
      </p>
      <p className="text-bold text-gray-500">{tournament.prizePool}</p>

      <p className="text-lg flex gap-2 items-center mt-4 ">
        <Timer className="size-4" /> Regras
      </p>
      <p className="text-gray-500">{tournament.rules}</p>
    </div>
  );
}

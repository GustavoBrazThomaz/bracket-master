import { Trophy } from "lucide-react";
import { useGetTournaments } from "../../service/tournaments/use-get-tournaments";
import TournamentCard from "../../ui/components/tournament-card";
import { openModal } from "../../utils/modal";
import { CreateTournamentModal } from "./modal/create-tournament-modal";

export default function TournamentsPage() {
  const { data, isLoading, isPending } = useGetTournaments(
    {
      page: 0,
      size: 10,
      sort: "id,asc",
    },
    "home"
  );

  if (isLoading && isPending) return <p>Loading...</p>;

  return (
    <div className="w-full flex justify-center mt-24">
      <div className="w-full space-y-4 container">
        <p className="text-3xl font-bold">Campeonatos</p>
        <p className="text-md text-base-content -mt-2">
          Explore todos os campeonatos disponíveis e encontre o ideal para você
        </p>
        <div className="w-full rounded-lg p-4 flex gap-4 shadow">
          <input
            type="text"
            className="input w-full"
            placeholder="Buscar campeonatos"
          />

          <select defaultValue="Status" className="select">
            <option disabled={true}>Status</option>
            <option>Inscrições abertas</option>
            <option>Inscrições fechadas</option>
            <option>Concluído</option>
          </select>

          <select defaultValue="Ordenar por" className="select">
            <option disabled={true}>Ordenar por</option>
            <option>Mais antigos</option>
            <option>Mais novos</option>
            <option>Mais recentes</option>
          </select>
        </div>
        <div className="w-full flex justify-end">
          <button
            onClick={() => openModal("my_modal_1")}
            className="btn btn-neutral"
          >
            <Trophy className="size-4" /> Criar campeonato
          </button>
        </div>
        <div className="flex flex-wrap gap-4 justify-evenly">
          {data?.content.map((tournament) => (
            <TournamentCard tournament={tournament} key={tournament.id} />
          ))}
        </div>

        <CreateTournamentModal />
      </div>
    </div>
  );
}

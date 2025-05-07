import { useGetTournaments } from "../../service/tournaments/use-get-tournaments";
import TournamentCard from "../../ui/components/tournament-card";
import { openModal } from "../../utils/modal";
import { CreateTournamentModal } from "./modal/create-tournament-modal";

export default function TournamentsPage() {
  const { data, isLoading, isPending } = useGetTournaments({
    page: 0,
    size: 10,
    sort: "id,asc",
  });


  if (isLoading && isPending) return <p>Loading...</p>;

  return (
    <div className="w-full space-y-4">
      <div className="w-full flex justify-end">
        <button
          onClick={() => openModal("my_modal_1")}
          className="btn btn-neutral"
        >
          Criar torneio
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-evenly">
        {data?.content.map((tournament) => (
          <TournamentCard tournament={tournament} key={tournament.id} />
        ))}
      </div>

      <CreateTournamentModal />
    </div>
  );
}

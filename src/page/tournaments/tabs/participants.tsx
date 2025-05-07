import { useGetTournamentParticipants } from "../../../service/tournaments/use-get-tournament-participants";
import { useTournament } from "../../../service/tournaments/use-tournament";

export function TournamentParticipants({ id }: { id: string }) {
  const { data, isLoading } = useGetTournamentParticipants(id);
  const { registerParticipant } = useTournament();
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Error</p>;

  return (
    <div className="space-y-8">
      <button
        onClick={() => registerParticipant.mutate(id)}
        className="btn btn-neutral"
      >
        SE INSCREVE
      </button>

      <ul>
        {data.map((participant) => (
          <li>{participant.name}</li>
        ))}
      </ul>
    </div>
  );
}

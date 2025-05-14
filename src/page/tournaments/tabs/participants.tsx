import { useGetTournamentParticipants } from "../../../service/tournaments/use-get-tournament-participants";

export function TournamentParticipants({ id }: { id: string }) {
  const { data, isLoading } = useGetTournamentParticipants(id);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Error</p>;

  return (
    <div className="w-full border border-base-300 rounded-lg p-8 space-y-8">
      <p className="text-2xl font-semibold">Participantes</p>
      <div className="flex flex-wrap w-full gap-4">
        {data.map((participant) => (
          <div className="border border-base-300 p-4 rounded-lg flex-1 flex gap-4 items-center max-w-3xs">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
              </div>
            </div>
            <p className="font-semibold">{participant.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useGetTournamentBrackets } from "../../../../service/tournaments/use-get-tournament-brackets";
import { useTournament } from "../../../../service/tournaments/use-tournament";
import { BracketContainer } from "./bracketContainer";

export function Brackets({ id }: { id: string }) {
  const { generateBracket } = useTournament();
  const { data, isLoading } = useGetTournamentBrackets(id);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="w-full space-y-4">
      {data ? (
        <BracketContainer matches={data} />
      ) : (
        <div className="w-full h-full rounded-lg justify-center items-center flex-col flex py-16 gap-4">
          <p className="text-2xl font-semibold">As chaves ainda não foram criadas</p>
          <button
            onClick={() => generateBracket.mutate(id)}
            className="btn  bg-purple-600 text-white hover:bg-purple-700"
          >
            Criar Bracket
          </button>
        </div>
      )}
    </div>
  );
}

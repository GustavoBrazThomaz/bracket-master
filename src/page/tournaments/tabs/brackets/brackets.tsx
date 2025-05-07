import { useGetTournamentBrackets } from "../../../../service/tournaments/use-get-tournament-brackets";
import { useTournament } from "../../../../service/tournaments/use-tournament";
import { BracketContainer } from "./bracketContainer";

export function Brackets({ id }: { id: string }) {
  const { generateBracket } = useTournament();
  const { data, isLoading } = useGetTournamentBrackets(id);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>error</p>;

  return (
    <div className="w-full space-y-4">
      <div className="flex w-full justify-end">
        <button
          onClick={() => generateBracket.mutate(id)}
          className="btn btn-neutral"
        >
          Criar Bracket
        </button>
      </div>
      <BracketContainer matches={data} />
    </div>
  );
}

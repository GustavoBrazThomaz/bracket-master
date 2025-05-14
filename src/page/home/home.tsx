import { Link } from "react-router";
import { useGetTournaments } from "../../service/tournaments/use-get-tournaments";
import { HeroBanner } from "../../ui/components/hero-banner";
import { HowWork } from "../../ui/components/how-work";
import TournamentCard from "../../ui/components/tournament-card";
import { TournamentCardHighlight } from "../../ui/components/tournament-card-highlight";

export function Home() {
  const { data, isLoading, isPending } = useGetTournaments({
    page: 0,
    size: 3,
    sort: "id,asc",
  });

  if (isLoading && isPending) return <p>Loading...</p>;
  return (
    <>
      <HeroBanner />
      <div className="w-full flex items-center flex-col">
        <div className="w-full bg-white rounded-t-2xl py-4 px-8 -mt-8 shadow container">
          <div className="py-4 flex gap-4">
            <input
              className="input w-full"
              placeholder="Buscar campeonatos..."
            />
            <select defaultValue="Pick a color" className="select">
              <option disabled={true}>Selecione um filtro</option>
              <option>Qualquer status</option>
              <option>Incrições abertas</option>
              <option>Em andamento</option>
              <option>Concluído</option>
            </select>
            <button className="btn  bg-purple-600 text-white hover:bg-purple-700">
              Buscar
            </button>
          </div>
        </div>

        <div className="w-full py-8 container">
          <div className="w-full flex justify-between">
            <p className="text-2xl font-bold">Campeonatos em Destaque</p>
            <Link to="/tournaments" className="btn btn-link">
              Ver todos
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap container gap-4 mb-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <TournamentCardHighlight key={index} />
          ))}
        </div>

        <HowWork />
      </div>

      <div className="bg-gray-50 w-full flex flex-col items-center py-12 space-y-8">
        <div role="tablist" className="tabs tabs-box">
          <a role="tab" className="tab tab-active">
            Próximos Campeonatos
          </a>
          <a role="tab" className="tab ">
            Mais populares
          </a>
        </div>
        <div className="flex flex-wrap gap-4">
          {data?.content.map((tournament) => (
            <TournamentCard tournament={tournament} key={tournament.id} />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col items-center space-y-4 justify-center bg-purple-700 text-white p-8">
        <p className="text-3xl font-bold">Pronto para participar?</p>
        <p className="text-lg">
          Crie sua conta agora e comece a participar de campeonatos ou organize
          o seu próprio!
        </p>

        <div className="flex gap-4">
          {/* <button className="btn">Criar conta</button> */}
          <button className="btn bg-purple-700 text-white">Saiba mais</button>
        </div>
      </div>
    </>
  );
}

import { useParams } from "react-router";
import { useGetTournamentById } from "../../service/tournaments/use-get-tournament-by-id";
import dayjs from "dayjs";
import { User, Users } from "lucide-react";
import { hasDatePassed } from "../../utils/hasDatePassed";

export function TournamentPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetTournamentById(id ?? "");

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Error</p>;

  return (
    <div className="  w-full flex justify-center ">
      <div className="flex justify-center flex-col w-full max-w-3xl">
        <div className="flex justify-between">
          <div>
            <p className="text-xl font-bold">{data.name}</p>
            <p>{data.description}</p>
          </div>

          <button
            disabled={!data.isOpen || hasDatePassed(data?.date ?? new Date())}
            className="btn btn-neutral"
          >
            Entrar no torneio
          </button>
        </div>

        <p className="text-lg font-bold mt-4">Modalidade</p>
        <p>{data.modality}</p>
        <p className="text-lg font-bold mt-4">Participantes</p>
        <p>
          {data.participants ?? 0}/{data.registrationLimit}
        </p>
        <p className="text-lg font-bold mt-4">Tamanho da equipe</p>
        <p>
          {data.isIndividual ? (
            <div className="tooltip" data-tip="Individual">
              <p className="flex">
                <User /> 1
              </p>
            </div>
          ) : (
            <div className="tooltip" data-tip="Membros por time">
              <p className="flex">
                <Users /> {data.teamSize}
              </p>
            </div>
          )}
        </p>
        <p className="text-lg font-bold mt-3">Data</p>
        <p>{dayjs(data?.date).format("DD/MM/YYYY")}</p>

        <p className="text-lg font-bold mt-4">Prêmio</p>
        <p className="text-bold">{data.prizePool}</p>

        <p className="text-lg font-bold mt-4">Regras</p>
        <p>{data.rules}</p>
      </div>
    </div>
  );
}

import { User, Users } from "lucide-react";
import { Tournament } from "../../service/tournaments/types";
import { useNavigate } from "react-router";

export default function TournamentCard({
  tournament,
}: Readonly<{ tournament: Tournament }>) {
  const navigate = useNavigate();

  const {
    id,
    name,
    participants,
    registrationLimit,
    isIndividual,
    teamSize,
    isOpen,
  } = tournament;

  return (
    <div className="card w-96 bg-base-100 card-md shadow-sm relative flex-1 min-w-[375px]">
      <div className="card-body flex flex-col">
        <div className="flex flex-col">
          <div className="w-full flex justify-between">
            <div className="badge badge-neutral mb-2">E-Sport</div>

            <div className="flex gap-4">
              {isIndividual ? (
                <div className="tooltip" data-tip="Individual">
                  <p className="flex gap-2">
                    <User /> 1
                  </p>
                </div>
              ) : (
                <div className="tooltip" data-tip="Membros por time">
                  <p className="flex gap-2">
                    <Users /> {teamSize}
                  </p>
                </div>
              )}
            </div>
          </div>
          <h2 className="card-title">{name}</h2>
          <p>30/11/2023 até 27/02/2024</p>
        </div>
        <div className="divider my-0"></div>
        <div className="w-full flex justify-between mb-2">
          {!isOpen ? (
            <div className="badge badge-warning text-info-content">
              Incrições fechadas
            </div>
          ) : (
            <div className="badge badge-info text-info-content">
              Incrições abertas
            </div>
          )}

          <span className="flex gap-2 items-center">
            <Users className="size-4 text-gray-500" /> {participants}/
            {registrationLimit}
          </span>
        </div>

        <div className="card-actions">
          <button
            onClick={() => navigate(`/tournament/${id}`)}
            className="btn btn-primary w-full btn-outline border-base-300"
          >
            Ver detalhes
          </button>
        </div>
      </div>
    </div>
  );
}

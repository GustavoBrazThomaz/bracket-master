import { User, UserLock, Users } from "lucide-react";
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
    isOpen,
    isIndividual,
    teamSize,
  } = tournament;

  return (
    <div className="card w-96 bg-base-100 card-md shadow-sm relative">
      {!isOpen && (
        <div
          className="tooltip absolute -top-2 -left-2 "
          data-tip="Torneio fechado"
        >
          <div className="rounded-full p-2 bg-accent">
            <UserLock color="#fff" size={18} />
          </div>
        </div>
      )}

      <div className="card-body flex flex-col">
        <div className="flex justify-between">
          <h2 className="card-title">{name}</h2>

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

        <div>
          <p>
            {participants}/{registrationLimit}
          </p>
        </div>

        <div className="justify-end card-actions">
          <button
            onClick={() => navigate(`/tournament/${id}`)}
            className="btn btn-primary"
          >
            Ver detalhes
          </button>
        </div>
      </div>
    </div>
  );
}

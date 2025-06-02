import { openModal } from "../../../utils/modal";
import { MyTeamsCard } from "./my-teams-card";
import { NewTeamModal } from "./new-team-modal";

export function MyTeams() {
  return (
    <div className="w-full mt-4">
      <div className="w-full flex justify-between">
        <p className="text-lg font-bold">Meus times</p>
        <button
          onClick={() => openModal("new_team_modal")}
          className="btn btn-neutral"
        >
          Novo Time
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-4">
        <MyTeamsCard />
        <MyTeamsCard />
        <MyTeamsCard />
      </div>

      <NewTeamModal />
    </div>
  );
}

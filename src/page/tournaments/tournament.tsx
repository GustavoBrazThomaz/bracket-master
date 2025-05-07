import { ReactNode, useState } from "react";
import { useParams } from "react-router";
import { useGetTournamentById } from "../../service/tournaments/use-get-tournament-by-id";
import { TournamentDescription } from "./tabs/description";
import { TournamentParticipants } from "./tabs/participants";
import { Brackets } from "./tabs/brackets/brackets";

interface Tab {
  title: string;
  component: ReactNode;
}

export function TournamentPage() {
  const { id } = useParams();
  const tournamentId = id ?? "";
  const { data, isLoading } = useGetTournamentById(tournamentId);
  const [selectTab, setSelectTab] = useState<number>(0);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Error</p>;

  const tabs: Tab[] = [
    {
      title: "Descrição",
      component: <TournamentDescription tournament={data} />,
    },
    {
      title: "Participantes",
      component: <TournamentParticipants id={tournamentId} />,
    },
    {
      title: "Chaves",
      component: <Brackets id={tournamentId} />,
    },
  ];

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col justify-center items-center space-y-8 max-w-3xl">
          <div
            role="tablist"
            className="tabs tabs-border w-full  flex justify-center"
          >
            {tabs.map((tab, index) => (
              <a
                onClick={() => setSelectTab(index)}
                role="tab"
                key={`tab_${tab.title}`}
                className={`tab ${index === selectTab && "tab-active"}`}
              >
                {tab.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {tabs[selectTab].component}
    </>
  );
}

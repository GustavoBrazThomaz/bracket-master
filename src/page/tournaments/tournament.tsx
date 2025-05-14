import { ReactNode, useState } from "react";
import { useParams } from "react-router";
import { useGetTournamentById } from "../../service/tournaments/use-get-tournament-by-id";
import { TournamentDescription } from "./tabs/description";
import { TournamentParticipants } from "./tabs/participants";
import { Brackets } from "./tabs/brackets/brackets";
import { Calendar, MapPin, Trophy, Users } from "lucide-react";
import { hasDatePassed } from "../../utils/hasDatePassed";
import dayjs from "dayjs";
import { useTournament } from "../../service/tournaments/use-tournament";

interface Tab {
  title: string;
  component: ReactNode;
}

export function TournamentPage() {
  const { id } = useParams();
  const tournamentId = id ?? "";
  const { data, isLoading } = useGetTournamentById(tournamentId);
  const { registerParticipant } = useTournament();
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

  const cards = [
    {
      title: "Período",
      text: dayjs(data?.date).format("DD/MM/YYYY"),
      icon: <Calendar />,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-700",
      borderColor: "border-purple-300",
    },
    {
      title: "Status",
      text: "(Quartas de Final)",
      icon: <Trophy />,
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-700",
      borderColor: "border-indigo-300",
    },
    {
      title: "Participantes",
      text: `${data.participants ?? 0}/${data.registrationLimit}`,
      icon: <Users />,
      bgColor: "bg-green-100",
      iconColor: "text-green-700",
      borderColor: "border-green-300",
    },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="container w-full mt-24 p-4 space-y-4">
        <div className="bg-gradient-to-r from-purple-700 p-8 h-52 rounded-lg flex items-end-safe to-indigo-900 text-white">
          <div>
            <div className="badge mb-2">{data.modality}</div>
            <p className="text-3xl font-bold">{data.name}</p>
            <p className="flex gap-2 items-center">
              <MapPin className="size-4" /> Estádio Municipal
            </p>
          </div>
        </div>

        <div className="flex flex-wrap w-full gap-4">
          {cards.map((item) => (
            <div
              className={`w-full flex-1 flex items-center gap-4 leading-5 px-4 py-8 rounded-lg border ${item.borderColor} ${item.bgColor}`}
            >
              <div className={item.iconColor}>{item.icon}</div>
              <div>
                <p>{item.title}</p>
                <p className="text-sm text-gray-500">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between">
          <div className="flex gap-4 items-center ">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Organizado Por</p>
              <p className="font-semibold">Liga Regional</p>
            </div>
          </div>
          <button
            disabled={!data.isOpen || hasDatePassed(data.date ?? new Date())}
            onClick={() => registerParticipant.mutate(data.id)}
            className="btn btn-neutral"
          >
            Entrar no torneio
          </button>
        </div>

        <div className=" flex justify-center">
          <div className=" flex flex-col justify-center items-center space-y-8 w-full">
            <div
              role="tablist"
              className="tabs tabs-box flex justify-center w-full"
            >
              {tabs.map((tab, index) => (
                <a
                  onClick={() => setSelectTab(index)}
                  role="tab"
                  key={`tab_${tab.title}`}
                  className={`tab flex-1 w-full ${
                    index === selectTab && "tab-active"
                  }`}
                >
                  {tab.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {tabs[selectTab].component}
      </div>
    </div>
  );
}

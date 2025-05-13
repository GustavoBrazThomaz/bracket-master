import { MapPin, Trophy, Users } from "lucide-react";

export function HowWork() {
  const steps = [
    {
      id: 1,
      title: "Crie seu Time",
      description:
        "Cadastre seu time, adicione jogadores e comece a participar de campeonatos na sua região.",
      bgColor: "bg-purple-100",
      badgeColor: "bg-purple-600",
    },
    {
      id: 2,
      title: "Inscreva-se em Campeonatos",
      description:
        "Encontre campeonatos disponíveis e inscreva seu time com apenas alguns cliques.",
      bgColor: "bg-indigo-100",
      badgeColor: "bg-indigo-600",
    },
    {
      id: 3,
      title: "Acompanhe os Resultados",
      description:
        "Visualize tabelas, chaves eliminatórias e estatísticas em tempo real durante todo o campeonato.",
      bgColor: "bg-green-100",
      badgeColor: "bg-green-600",
    },
  ];

  const statistics = [
    {
      value: "250+",
      title: "Campeonatos Realizados",
      icon: <Trophy />,
      color: "bg-purple-600",
    },
    {
      value: "1.500+",
      title: "Times Cadastrados",
      icon: <Users />,
      color: "bg-indigo-600",
    },
    {
      value: "50+",
      title: "Cidades Atendidas",
      icon: <MapPin />,
      color: "bg-green-600",
    },
  ];

  return (
    <div className="container w-full flex flex-col items-center py-8 space-y-8  mt-8">
      <div className="w-full flex flex-col items-center gap-4 pb-8">
        <p className="text-4xl font-bold">Como Funciona</p>
        <p className="text-xl text-gray-500">
          Organize ou participe de campeonatos em poucos passos. Nossa
          plataforma torna simples todo o processo.
        </p>
      </div>
      <div className="flex flex-wrap gap-8">
        {steps.map((item) => (
          <div
            key={item.id}
            className={
              "p-8 flex-1 flex justify-center flex-col items-center rounded-lg space-y-4 " +
              item.bgColor
            }
          >
            <div
              className={
                "p-2 text-2xl flex items-center justify-center size-20 font-bold text-white rounded-full " +
                item.badgeColor
              }
            >
              {item.id}
            </div>
            <p className="text-2xl font-bold">{item.title}</p>
            <p className="text-lg text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="border border-base-300 bg-base-200 p-4 flex gap-4 rounded-lg">
        <div className="flex gap-6">
          {statistics.map((item) => (
            <div className="flex items-center gap-2">
              <div
                className={
                  "p-2 text-xl flex items-center justify-center size-12 font-bold text-white rounded-full " +
                  item.color
                }
              >
                {item.icon}
              </div>
              <div className="leading-3">
                <p className="text-xl font-bold">{item.value}</p>
                <p className="text-gray-500 text-sm">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

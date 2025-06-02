import ParticipatingCard from "./participating-card";

export function Participating() {
  return (
    <div className="w-full mt-4">
      <div className="w-full flex justify-between">
        <p className="text-lg font-bold">Campeonatos que Participo</p>
        <button className="btn btn-neutral">Ver campeonatos</button>
      </div>

       <div className="mt-4 flex flex-wrap gap-4">
        <ParticipatingCard />
        <ParticipatingCard />
        <ParticipatingCard />
      </div>
    </div>
  );
}

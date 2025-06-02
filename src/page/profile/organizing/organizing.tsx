import OrganizingCard from "./organizing-card";

export function Organizing() {
  return (
    <div className="w-full mt-4">
      <div className="w-full flex justify-between">
        <p className="text-lg font-bold">Campeonatos que Organizo</p>
        <button className="btn btn-neutral">Novo campeonatos</button>
      </div>

      <div className="mt-4 flex flex-wrap gap-4">
        <OrganizingCard />
        <OrganizingCard />
        <OrganizingCard />
      </div>
    </div>
  );
}

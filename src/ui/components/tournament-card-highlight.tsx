import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";

export function TournamentCardHighlight() {
  return (
    <div className="card flex-1 border border-base-300">
      <figure className="relative">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
        <div className="absolute bottom-6 left-6">
          <div className="badge mb-2">Tênis</div>
          <p className=" text-white text-2xl font-bold">
            Copa Regional de Tênis
          </p>
        </div>
      </figure>
      <div className="card-body [&_p]:flex [&_p]:gap-2 [&_p]:items-center">
        <p>
          <Calendar size={20} /> 14/10/2023 até 19/12/2023
        </p>
        <p>
          <MapPin size={20} /> Estádio Municipal
        </p>
        <p>
          <Users size={20} /> 16 participantes
        </p>

        <div className="badge badge-success mt-2">Em andamento</div>
      </div>
      <div className="card-actions !pt-0 p-6 ">
        <button className="btn w-full btn-outline border-base-300">
          Ver detalhes
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

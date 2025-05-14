import { useNavigate } from "react-router";

export function HeroBanner() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-purple-700 to-indigo-900 text-white py-16 h-dvh flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Encontre e Participe de Campeonatos
            </h1>
            <p className="text-lg mb-6 text-purple-100">
              Organize, participe e acompanhe campeonatos esportivos de diversas
              modalidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <button className="btn bg-white text-purple-900 hover:bg-purple-100">
                Criar Conta
              </button> */}
              <button
                onClick={() => navigate("/tournaments")}
                className="btn bg-purple-600 text-white hover:bg-purple-700"
              >
                Explorar Campeonatos
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500 rounded-full opacity-30"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500 rounded-full opacity-30"></div>
              <div className="bg-white p-2 rounded-lg shadow-xl rotate-3">
                <img
                  src="https://files.oaiusercontent.com/file-6XPte8H4Xj7ZXyLJxPmWBb?se=2025-05-13T15%3A42%3A04Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D61fc71b1-fba8-4998-bc79-4ca755460185.webp&sig=tU1NtKDeN98lUncNMKRS%2BCWooNvu/NfIa1fhbGssNLc%3D"
                  alt="Campeonato em ação"
                  className="rounded w-full h-auto pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

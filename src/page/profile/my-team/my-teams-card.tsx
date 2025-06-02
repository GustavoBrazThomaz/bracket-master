export function MyTeamsCard() {
  return (
    <div className="w-full border border-base-300 rounded-lg p-4 flex-1">
      <div className="flex items-center gap-4">
        <div className="avatar">
          <div className="w-18 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold">Águias do Basquete</p>
          <p className="text-gray-400">16 Membros - 1 campeonato</p>
        </div>
      </div>
    </div>
  );
}

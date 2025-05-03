export function openModal(id: string) {
  const modal = document.getElementById(id) as HTMLDialogElement | null;
  if (modal) {
    modal.showModal();
  }
}

export function closeModal(id: string) {
  const modal = document.getElementById(id) as HTMLDialogElement | null;
  if (modal) {
    modal.close();
  }
}

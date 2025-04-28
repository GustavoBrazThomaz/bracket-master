export type Tournament = {
  id: string;
  name: string;
  participants: number;
  registrationLimit: number;
  isOpen: boolean;
  isIndividual: boolean;
  teamSize: number;
  description?: string;
  prizePool?: string;
  date?: Date;
  rules?: string;
  modality?: string;
};

export type TournamentResponse = {
  content: Tournament[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
};

import z from "zod";

export const tournamentFormSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  rules: z.string().min(1),
  modality: z.string().min(1),
  prizePool: z.string().min(1),
  registrationLimit: z.string(),
  teamSize: z.string(),
  isOpen: z.boolean(),
  isIndividual: z.boolean(),
  date: z.string(),
});

export type TournamentFormSchema = z.infer<typeof tournamentFormSchema>;

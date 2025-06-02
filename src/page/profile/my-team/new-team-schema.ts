import z from "zod";

export const newTeamFormSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
});

export type NewTeamFormSchema = z.infer<typeof newTeamFormSchema>;

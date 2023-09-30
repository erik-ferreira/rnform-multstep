import { z } from "zod"

export const firstStepSchema = z.object({
  name: z.string().min(1, {
    message: "Nome inválido",
  }),
  email: z.string().email("E-mail inválido"),
})

export type FirstStepData = z.infer<typeof firstStepSchema>

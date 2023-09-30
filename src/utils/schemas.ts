import { z } from "zod"

export const formStepOneSchema = z.object({
  name: z.string().min(1, {
    message: "Nome inválido",
  }),
  email: z.string().email("E-mail inválido"),
})

export type FormStepOneData = z.infer<typeof formStepOneSchema>

export const formStepTwoSchema = z.object({
  birth: z.string(),
  phone: z.string(),
})

export type FormStepTwoData = z.infer<typeof formStepTwoSchema>

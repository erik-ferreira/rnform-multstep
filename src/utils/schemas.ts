import { z } from "zod"

export const formStepOneSchema = z.object({
  name: z.string().min(1, {
    message: "Nome inválido",
  }),
  email: z.string().email("E-mail inválido"),
})

export type FormStepOneData = z.infer<typeof formStepOneSchema>

export const formStepTwoSchema = z.object({
  birth: z.string().refine((value) => /^\d{2}\/\d{2}\/\d{4}$/.test(value), {
    message: "Data de nascimento inválida",
  }),
  phone: z.string().length(9, {
    message: "Número de telefone inválido",
  }),
})

export type FormStepTwoData = z.infer<typeof formStepTwoSchema>

export const formStepThreeSchema = z
  .object({
    password: z.string().min(6, {
      message: "A senha deve ter pelo menos 6 caracteres.",
    }),
    passwordConfirmation: z.string().min(6, {
      message: "As senhas não coincidem",
    }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "As senhas não coincidem",
    path: ["passwordConfirmation"],
  })

export type FormStepThreeData = z.infer<typeof formStepThreeSchema>

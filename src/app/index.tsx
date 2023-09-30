import { useRef } from "react"
import { useForm } from "react-hook-form"
import { useNavigation } from "expo-router"
import { View, Text, TextInput } from "react-native"
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from "@/components/Input"
import { Button } from "@/components/Button"

import { useAccountForm } from "@/context/AccountFormContext"

import { formStepOneSchema, FormStepOneData } from "@/utils/schemas"

import { styles } from "./styles"

export default function FormStepOne() {
  const { navigate } = useNavigation()
  const emailRef = useRef<TextInput>(null)
  const { accountFormData, updateAccountFormData } = useAccountForm()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormStepOneData>({
    resolver: zodResolver(formStepOneSchema),
    defaultValues: {
      name: accountFormData.name,
      email: accountFormData.email,
    },
  })

  function handleNextStep(data: FormStepOneData) {
    updateAccountFormData(data)
    navigate("formStepTwo")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar sua conta</Text>

      <Input
        icon="user"
        placeholder="Nome"
        returnKeyType="next"
        controllerProps={{ name: "name", control }}
        onSubmitEditing={() => emailRef.current?.focus()}
        error={errors?.name?.message}
      />
      <Input
        icon="mail"
        ref={emailRef}
        placeholder="E-mail"
        controllerProps={{ name: "email", control }}
        error={errors?.email?.message}
      />

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </View>
  )
}

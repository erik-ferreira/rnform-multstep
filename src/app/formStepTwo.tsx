import { useRef } from "react"
import { useForm } from "react-hook-form"
import { useNavigation } from "expo-router"
import { View, Text, TextInput } from "react-native"
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from "@/components/Input"
import { Button } from "@/components/Button"

import { useAccountForm } from "@/context/AccountFormContext"

import { formStepTwoSchema, FormStepTwoData } from "@/utils/schemas"

import { styles } from "./styles"

export default function FormStepTwo() {
  const { navigate } = useNavigation()
  const phoneRef = useRef<TextInput>(null)
  const { accountFormData, updateAccountFormData } = useAccountForm()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormStepTwoData>({
    resolver: zodResolver(formStepTwoSchema),
    defaultValues: {
      birth: accountFormData.birth,
      phone: accountFormData.phone,
    },
  })

  function handleNextStep(data: FormStepTwoData) {
    navigate("formStepThree")
    updateAccountFormData(data)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suas informações</Text>

      <Input
        maxLength={10}
        icon="calendar"
        placeholder="Data de nascimento"
        returnKeyType="next"
        controllerProps={{ name: "birth", control }}
        onSubmitEditing={() => phoneRef.current?.focus()}
        error={errors?.birth?.message}
      />
      <Input
        icon="phone"
        ref={phoneRef}
        placeholder="Telefone"
        controllerProps={{ name: "phone", control }}
        error={errors?.phone?.message}
        maxLength={9}
      />

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </View>
  )
}

import { useRef } from "react"
import { useForm } from "react-hook-form"
import { useNavigation } from "expo-router"
import { View, Text, TextInput } from "react-native"
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from "@/components/Input"
import { Button } from "@/components/Button"

import { formStepThreeSchema, FormStepThreeData } from "@/utils/schemas"

import { styles } from "./styles"

export default function FormStepThree() {
  const { navigate } = useNavigation()
  const phoneRef = useRef<TextInput>(null)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormStepThreeData>({
    resolver: zodResolver(formStepThreeSchema),
    defaultValues: {
      password: "",
      passwordConfirmation: "",
    },
  })

  function handleNextStep(data: FormStepThreeData) {
    console.log("formStepThreeSchema", data)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha sua senha</Text>

      <Input
        icon="lock"
        placeholder="Senha"
        returnKeyType="next"
        controllerProps={{ name: "password", control }}
        onSubmitEditing={() => phoneRef.current?.focus()}
        error={errors?.password?.message}
      />
      <Input
        icon="lock"
        ref={phoneRef}
        placeholder="Confirmar senha"
        controllerProps={{ name: "passwordConfirmation", control }}
        error={errors?.passwordConfirmation?.message}
      />

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </View>
  )
}

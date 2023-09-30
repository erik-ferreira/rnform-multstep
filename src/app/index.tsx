import { useRef } from "react"
import { useForm } from "react-hook-form"
import { View, Text, TextInput } from "react-native"
import { zodResolver } from "@hookform/resolvers/zod"

import { Input } from "@/components/Input"
import { Button } from "@/components/Button"

import { firstStepSchema, FirstStepData } from "@/utils/schemas"

import { styles } from "./styles"

export default function FormStepOne() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FirstStepData>({
    resolver: zodResolver(firstStepSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  })

  const emailRef = useRef<TextInput>(null)

  function handleNextStep(data: FirstStepData) {
    console.log(data)
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

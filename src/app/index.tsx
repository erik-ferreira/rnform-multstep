import { useRef } from "react"
import { useForm } from "react-hook-form"
import { View, Text, TextInput } from "react-native"

import { Button } from "@/components/Button"
import { Input, InputsData } from "@/components/Input"

import { styles } from "./styles"

export default function FormStepOne() {
  const { control, handleSubmit } = useForm<InputsData>({})

  const emailRef = useRef<TextInput>(null)

  function handleNextStep(data: InputsData) {
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
      />
      <Input
        icon="mail"
        ref={emailRef}
        placeholder="E-mail"
        controllerProps={{ name: "email", control }}
      />

      <Button title="Continuar" onPress={handleSubmit(handleNextStep)} />
    </View>
  )
}

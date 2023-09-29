import { View, Text } from "react-native"
import { useForm } from "react-hook-form"

import { Input } from "@/components/Input"

import { styles } from "./styles"

export default function FormStepOne() {
  const { control } = useForm()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar sua conta</Text>

      <Input
        icon="user"
        placeholder="Nome"
        controllerProps={{ name: "name", control }}
      />
      <Input
        icon="mail"
        placeholder="E-mail"
        controllerProps={{ name: "email", control }}
      />
    </View>
  )
}

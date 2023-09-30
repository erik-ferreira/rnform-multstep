import { View, Text } from "react-native"

import { useAccountForm } from "@/context/AccountFormContext"

import { styles } from "./styles"

export default function FinishForm() {
  const { accountFormData } = useAccountForm()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados:</Text>

      <Text style={styles.subtitle}>Nome: {accountFormData.name}</Text>
      <Text style={styles.subtitle}>E-mail: {accountFormData.email}</Text>
      <Text style={styles.subtitle}>
        Data de Nascimento: {accountFormData.birth}
      </Text>
      <Text style={styles.subtitle}>Telefone: {accountFormData.phone}</Text>
      <Text style={styles.subtitle}>
        Senha: {accountFormData.password} /{" "}
        {accountFormData.passwordConfirmation}
      </Text>
    </View>
  )
}

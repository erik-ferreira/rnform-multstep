import { View, Text } from "react-native"

import {} from "./styles"

interface InputProps {}

export function Input({ ...rest }: InputProps) {
  return (
    <View>
      <Text style={{ color: "white" }}>Input here</Text>
    </View>
  )
}

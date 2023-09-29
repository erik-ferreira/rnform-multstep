import { Feather } from "@expo/vector-icons"
import { View, TextInput, TextInputProps } from "react-native"
import { Controller, UseControllerProps } from "react-hook-form"

import { styles } from "./styles"

interface InputProps extends TextInputProps {
  icon: keyof typeof Feather.glyphMap
  controllerProps: UseControllerProps
}

export function Input({ icon, controllerProps, ...rest }: InputProps) {
  return (
    <Controller
      render={() => (
        <View style={styles.group}>
          <View style={styles.icon}>
            <Feather name={icon} size={24} color="#0f172a" />
          </View>

          <TextInput style={styles.control} {...rest} />
        </View>
      )}
      {...controllerProps}
    />
  )
}

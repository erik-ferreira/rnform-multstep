import { forwardRef } from "react"
import { Feather } from "@expo/vector-icons"
import { View, TextInput, TextInputProps } from "react-native"
import { Controller, UseControllerProps } from "react-hook-form"

import { styles } from "./styles"

export interface InputsData {
  name: string
  email: string
}

interface InputProps extends TextInputProps {
  icon: keyof typeof Feather.glyphMap
  controllerProps: UseControllerProps<InputsData>
}

export const Input = forwardRef<TextInput, InputProps>(
  ({ icon, controllerProps, ...rest }, ref) => {
    return (
      <Controller
        render={({ field }) => (
          <View style={styles.group}>
            <View style={styles.icon}>
              <Feather name={icon} size={24} color="#0f172a" />
            </View>

            <TextInput
              ref={ref}
              style={styles.control}
              value={field.value}
              onChangeText={field.onChange}
              {...rest}
            />
          </View>
        )}
        control={controllerProps.control}
        {...controllerProps}
      />
    )
  }
)

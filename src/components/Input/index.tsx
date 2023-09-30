import { forwardRef } from "react"
import { Feather } from "@expo/vector-icons"
import { Controller, UseControllerProps } from "react-hook-form"
import { View, Text, TextInput, TextInputProps } from "react-native"

import { styles } from "./styles"

interface InputProps extends TextInputProps {
  error?: string
  icon: keyof typeof Feather.glyphMap
  controllerProps: UseControllerProps<any>
}

export const Input = forwardRef<TextInput, InputProps>(
  ({ error, icon, controllerProps, ...rest }, ref) => {
    return (
      <Controller
        render={({ field }) => (
          <View style={styles.container}>
            <View style={styles.group}>
              <View style={styles.icon}>
                <Feather
                  name={icon}
                  size={24}
                  color={error ? "#DC1637" : "#0f172a"}
                />
              </View>

              <TextInput
                ref={ref}
                style={styles.control}
                value={field.value}
                onChangeText={field.onChange}
                {...rest}
              />
            </View>

            {error && <Text style={styles.messageError}>{error}</Text>}
          </View>
        )}
        control={controllerProps.control}
        {...controllerProps}
      />
    )
  }
)

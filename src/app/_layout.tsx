import { Stack } from "expo-router/stack"
import { StatusBar } from "expo-status-bar"

import { AccountFormProvider } from "@/context/AccountFormContext"

export default function StackLayout() {
  return (
    <AccountFormProvider>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="formStepTwo" />
      </Stack>
    </AccountFormProvider>
  )
}

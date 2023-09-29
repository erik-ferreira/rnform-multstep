import { Stack } from "expo-router/stack"
import { StatusBar } from "expo-status-bar"

export default function StackLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </>
  )
}

import { View } from "react-native"

import { styles } from "./styles"

interface ProgressProps {
  progress: 33 | 66 | 100
}

export function Progress({ progress }: ProgressProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${progress}%` }]} />
    </View>
  )
}

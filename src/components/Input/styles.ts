import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  group: {
    width: "100%",
    height: 56,

    flexDirection: "row",
    alignItems: "center",

    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#475569",
  },

  icon: {
    width: 56,
    height: 56,

    alignItems: "center",
    justifyContent: "center",

    overflow: "hidden",
    borderRightWidth: 3,
  },

  control: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 16,
    color: "#e2e8f0",
  },

  messageError: {
    fontSize: 14,
    marginTop: 8,
    color: "#DC1637",
  },
})

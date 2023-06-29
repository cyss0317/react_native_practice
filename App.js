import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  let x = 123;
  x.toString();
  return (
    <View style={styles.container}>
      <Text>Hello React Native{x}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "space-between",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! my name is yun</Text>
      <Text>Open up App.js to start working on your app! my name is yun</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { DripsyProvider, makeTheme } from "dripsy";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const theme = makeTheme({});

export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </DripsyProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

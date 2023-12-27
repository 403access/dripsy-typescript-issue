import { DripsyProvider, Text, makeTheme } from "dripsy";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

const theme = makeTheme({
  colors: {
    $text: '#000',
    $background: '#fff',
    $primary: '#07c',
  },
});

export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <View style={styles.container}>
        <Text
          sx={{
            fontSize: [14, 16, 20], // 14 on mobile, 16 on tablet, 20 on desktop
            color: ["$primary", null, "accent"], // `primary` on mobile & tablet, `accent` on desktop,
            // color: ["red"],
          }}
        >
          Responsive font size?? 🤯
        </Text>
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

import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderRadius: 8,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 36,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
    color: Colors.accent500,
  },
});

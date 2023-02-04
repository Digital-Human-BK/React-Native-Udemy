import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function InstructionsText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionsText;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    fontFamily: "open-sans",
    color: Colors.accent500,
  },
});

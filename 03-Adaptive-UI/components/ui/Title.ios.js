import { Text, StyleSheet, Platform } from "react-native";

import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    // fontWeight: "bold",
    color: Colors.primaryFont,
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: Colors.primaryFont,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});

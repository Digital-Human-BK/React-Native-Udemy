import { View, Text, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderRadius: 8,
    borderColor: Colors.accent500,
    padding: deviceWidth < 350 ? 12 : 24,
    margin: deviceWidth < 350 ? 12 : 24,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: deviceWidth < 350 ? 24 : 34,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
    color: Colors.accent500,
  },
});

import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    textAlign: "center",

    fontSize: 18,
    color: "#e2b497",
    fontWeight: "bold",
  },
  subTitleContainer: {
    padding: 6,
    margin: 4,
    marginHorizontal: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
  },
});

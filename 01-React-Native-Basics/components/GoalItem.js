import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem({ itemData, handleDelete }) {
  const handleGoalDelete = () => {
    handleDelete(itemData.item.id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={handleGoalDelete}
        android_ripple={{ color: "#ddd", borderRadius: 6 }}
        //android_ripple doesn't affect ios app, bottom line is used instead
        style={({ pressed }) => pressed && styles.itemPressed}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "#fff",
  },
  itemPressed: {
    opacity: 0.6,
  },
});

export default GoalItem;

import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goalsList, setGoalsList] = useState([]);

  const handleAddGoal = (goal) => {
    setGoalsList((currentGoalsList) => [
      ...currentGoalsList,
      { id: Math.random().toString(), text: goal },
    ]);
  };

  const handleDelete = (id) => {
    setGoalsList((currentGoalsList) => {
      return currentGoalsList.filter((goal) => goal.id !== id);
    });
  };

  const handleModalToggle = () => {
    setIsModalVisible((toggle) => !toggle);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={handleModalToggle}
        />
        <GoalInput
          addGoal={handleAddGoal}
          toggleModal={handleModalToggle}
          isVisible={isModalVisible}
        />
        <Text style={styles.heading}>Your goals</Text>
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalsList}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
              <GoalItem
                itemData={itemData}
                handleDelete={handleDelete}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  heading: {
    color: "#e4d0ff",
    textAlign: "center",
    marginTop: 30,
    fontSize: 20,
  },
  goalsContainer: {
    flex: 5,
  },
});

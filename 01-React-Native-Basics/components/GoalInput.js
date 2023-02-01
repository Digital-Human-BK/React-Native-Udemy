import { useState } from "react";
import {
  Button,
  View,
  TextInput,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput({ addGoal, isVisible, toggleModal }) {
  const [enteredText, setEnteredText] = useState("");

  const handleGoalInput = (inputText) => {
    setEnteredText(inputText);
  };

  const handleAddGoal = () => {
    addGoal(enteredText);
    setEnteredText("");
    toggleModal();
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goals"
          onChangeText={handleGoalInput}
          value={enteredText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              color="#f31282"
              title="Cancel"
              onPress={toggleModal}
            />
          </View>
          <View style={styles.button}>
            <Button
              color="#b180f0"
              title="Add goal"
              onPress={handleAddGoal}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    padding: 10,
  },
  buttonsContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default GoalInput;

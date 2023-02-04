import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";

import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionsText from "../components/ui/InstructionsText";

function GameStart({ onNumPick }) {
  const [number, setNumber] = useState("");

  const inputHandler = (enteredNumber) => {
    setNumber(enteredNumber);
  };

  const resetInputHandler = () => {
    setNumber("");
  };

  const confirmHandler = () => {
    const chosenNum = parseInt(number);

    if (isNaN(chosenNum) || chosenNum > 99 || chosenNum <= 0) {
      Alert.alert("Invalid number", "Has to be a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onNumPick(chosenNum);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my number</Title>
      <Card>
        <InstructionsText>Enter a number</InstructionsText>
        <TextInput
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          onChangeText={inputHandler}
          value={number}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    textAlign: "center",
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});

export default GameStart;

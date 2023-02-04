import { useEffect, useState } from "react";
import { View, StyleSheet, Alert, FlatList, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import InstructionsText from "../components/ui/InstructionsText";
import PrimaryButton from "../components/ui/PrimaryButton";
import GuessLog from "../components/game/GuessLog";

function generateRandomBetween(min, max, exclude) {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GamePlay({ userNum, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([]);

  useEffect(() => {
    if (currentGuess === userNum) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNum]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    console.log("LOOP");
    if (
      (direction === "lower" && currentGuess < userNum) ||
      (direction === "higher" && currentGuess > userNum)
    ) {
      Alert.alert("Gotcha!", "Don't try to cheat...", [
        { text: "I promise", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else if (direction === "higher") {
      minBoundary = currentGuess + 1;
    }
    const newRandomNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNum);
    setGuessRounds((prev) => [newRandomNum, ...prev]);
  };

  const guessLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionsText style={styles.instructionText}>
          Higher or lower?
        </InstructionsText>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons
                name="remove-circle-outline"
                size={24}
                color="white"
              />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={() => nextGuessHandler("higher")}>
              <Ionicons
                name="add-circle-outline"
                size={24}
                color="white"
              />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          keyExtractor={(item) => item}
          renderItem={(itemData) => (
            <GuessLog
              roundNum={guessLength - itemData.index}
              guess={itemData.item}
            />
          )}
        />
      </View>
    </View>
  );
}

export default GamePlay;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 30,
    alignItems: "center",
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

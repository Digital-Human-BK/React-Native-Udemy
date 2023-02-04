import { useState, useCallback } from "react";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import {
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from "react-native";

import GamePlay from "./screens/GamePlay";
import GameStart from "./screens/GameStart";
import Colors from "./constants/colors";
import GameOver from "./screens/GameOver";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNum, setUserNum] = useState(null);
  const [gameOver, setGameOver] = useState(true);
  const [rounds, setRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const pickNumHandler = (inputNum) => {
    setGameOver(false);
    setUserNum(inputNum);
  };
  const gameRestartHandler = () => {
    setUserNum(null);
    setRounds(0);
  };

  const gameOverHandler = (roundsNum) => {
    setGameOver(true);
    setRounds(roundsNum);
  };

  let screen = <GameStart onNumPick={pickNumHandler} />;

  if (userNum) {
    screen = (
      <GamePlay
        userNum={userNum}
        onGameOver={gameOverHandler}
      />
    );
  }

  if (userNum && gameOver) {
    screen = (
      <GameOver
        rounds={rounds}
        userNum={userNum}
        onRestart={gameRestartHandler}
      />
    );
  }

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.primary700, Colors.accent500]}
      onLayout={onLayoutRootView}
    >
      <ImageBackground
        style={styles.rootScreen}
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        imageStyle={styles.imageBg}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
  },
  imageBg: {
    opacity: 0.15,
  },
});

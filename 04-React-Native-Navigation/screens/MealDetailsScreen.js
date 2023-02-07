import { useLayoutEffect } from "react";
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";

import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";

import { MEALS } from "../data/data";

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((m) => m.id === mealId);

  const headerButtonPressHandler = () => {
    console.log("Header button pressed!");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        style={styles.image}
        source={{ uri: meal.imageUrl }}
      />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        textStyle={{ color: "white" }}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List items={meal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List items={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    margin: 8,
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});

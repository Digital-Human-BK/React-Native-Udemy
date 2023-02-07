import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";

import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";

import { MEALS } from "../data/data";
import { selectFavorites } from "../store/store";
import { addFavorite, removeFavorite } from "../store/favoritesSlice";

function MealDetailsScreen({ route, navigation }) {
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const favoriteMeals = useSelector(selectFavorites);
  const mealIsFavorite = favoriteMeals.includes(mealId);

  const meal = MEALS.find((m) => m.id === mealId);

  const headerButtonPressHandler = () => {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
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

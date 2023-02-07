import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

import MealsList from "../components/MealList/MealsList";

import { selectFavorites } from "../store/store";
import { MEALS } from "../data/data";

function FavoritesScreen() {
  const favoriteMealIds = useSelector(selectFavorites);
  console.log(favoriteMealIds);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );
  console.log(favoriteMeals);

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have nothing in the favorites yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

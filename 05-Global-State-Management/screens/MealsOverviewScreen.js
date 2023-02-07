import { useLayoutEffect } from "react";
import MealsList from "../components/MealList/MealsList";

import { CATEGORIES, MEALS } from "../data/data";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((cat) => cat.id === catId).title;

    navigation.setOptions({
      title: catTitle,
    });
  }, [navigation, catId]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;

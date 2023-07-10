import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList";

function MealsOverView({ route, navigation }) {
  const cid = route.params.cid;
  const categoryTitle = CATEGORIES.find((c) => c.id === cid).title;

  const mealsInCategory = MEALS.filter((meal) =>
    meal.categoryIds.includes(cid)
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [cid, navigation]);

  return <MealsList meals={mealsInCategory}></MealsList>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
  flatlist: {
    paddingVertical: 32,
  },
});
export default MealsOverView;

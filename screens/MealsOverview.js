import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

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

  function renderedMeals(itemData) {
    function handleNavigation() {
      navigation.navigate("MealDetails", { mid: itemData.item.id });
    }
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      onPress: handleNavigation,
    };

    return <MealItem {...mealItemProps}></MealItem>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={mealsInCategory}
        keyExtractor={(item) => item.id}
        renderItem={renderedMeals}
        contentContainerStyle={styles.flatlist}
      ></FlatList>
    </View>
  );
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

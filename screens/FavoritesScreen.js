import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  const ids = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (ids.length === 0)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          You haven't added any favorite meal yet!
        </Text>
      </View>
    );
  return <MealsList meals={favoriteMeals}></MealsList>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center",
  },
});
export default FavoritesScreen;

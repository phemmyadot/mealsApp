import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

function MealsList({ meals }) {
  const navigation = useNavigation();
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
        data={meals}
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
export default MealsList;

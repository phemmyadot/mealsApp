import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from "./../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", { cid: itemData.item.id });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      ></CategoryGridTile>
    );
  }
  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
        contentContainerStyle={styles.flatlist}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
    flex: 1,
  },
  flatlist: {
    paddingVertical: 32,
  },
});
export default CategoriesScreen;

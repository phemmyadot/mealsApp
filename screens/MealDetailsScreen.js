import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import MealsDetails from "../components/MealsDetails";
import Ionicons from "@expo/vector-icons/Ionicons";
import FavoriteIcon from "../components/FavoriteIcon";

function MealDetailsScreen({ navigation, route }) {
  const mid = route.params.mid;
  const meal = MEALS.find((m) => m.id === mid);
  const {
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
  } = meal;

  function handleFavorite() {}

  useLayoutEffect(() => {
    navigation.setOptions({
      title,
      headerRight: () => {
        return (
          <FavoriteIcon
            icon={"star"}
            color={Colors.white}
            onPress={handleFavorite}
          />
        );
      },
    });
  }, [mid, navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <ScrollView>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
          <MealsDetails
            affordability={affordability}
            complexity={complexity}
            duration={duration}
          />
          <View style={styles.list}>
            <Text style={styles.subTitle}>Ingredients</Text>

            {ingredients.map((i, idx) => (
              <View
                key={idx}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Ionicons name="md-checkbox-outline" size={16}></Ionicons>
                <Text style={{ marginLeft: 8 }}>{i}</Text>
              </View>
            ))}
          </View>
          <View style={styles.list}>
            <Text style={styles.subTitle}>Steps</Text>
            {steps.map((s, i) => (
              <View
                style={{ flexDirection: "row", alignItems: "center" }}
                key={i}
              >
                <Text>{i + 1}.</Text>
                <Text style={{ marginLeft: 8 }}>{s}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    overflow: "hidden",
    flex: 1,
  },
  innerContainer: {
    paddingBottom: 64,
    paddingTop: 16,
  },
  image: {
    width: "100%",
    height: 300,
  },
  list: {
    paddingHorizontal: 16,
    marginVertical: 8,
    gap: 4,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4,
  },
});
export default MealDetailsScreen;

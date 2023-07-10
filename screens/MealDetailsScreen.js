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
      title: "About the Meal",
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
            textColor={Colors.primary200}
          />
          <View style={styles.list}>
            <Text style={styles.subTitle}>Ingredients</Text>

            {ingredients.map((i, idx) => (
              <View key={idx} style={styles.listRow}>
                <Ionicons
                  name="md-checkbox-outline"
                  size={16}
                  style={styles.text}
                ></Ionicons>
                <Text style={styles.text}>{i}</Text>
              </View>
            ))}
          </View>
          <View style={styles.list}>
            <Text style={styles.subTitle}>Steps</Text>
            {steps.map((s, i) => (
              <View style={styles.listRow} key={i}>
                <Text style={styles.text}>{i + 1}.</Text>
                <Text style={styles.text}>{s}</Text>
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
    backgroundColor: Colors.primary800,
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
    color: Colors.accent600,
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  subTitle: {
    fontWeight: "bold",
    color: Colors.primary200,
    fontSize: 18,
    marginBottom: 4,
  },
  text: {
    color: Colors.primary200,
    marginLeft: 8,
  },
  listRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
});
export default MealDetailsScreen;

import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Colors from "./../constants/colors";
import MealsDetails from "./MealsDetails";

function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: Colors.primary200 }}
        style={({ pressed }) => pressed && styles.pressedButton}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealsDetails
            affordability={affordability}
            complexity={complexity}
            duration={duration}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: Colors.white,
    elevation: 4,
    shadowColor: Colors.white,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 4,
    overflow: "hidden",
    shadowOpacity: 0.25,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  pressedButton: {
    opacity: Platform.OS === "ios" && 0.75,
    backgroundColor: Platform.OS === "ios" && Colors.primary200,
  },
});
export default MealItem;

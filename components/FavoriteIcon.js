import { Platform, Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../constants/colors";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";

function FavoriteIcon({ mealId }) {
  const { ids, addFavorite, removeFavorite } = useContext(FavoritesContext);
  function handleFavorite() {
    ids.includes(mealId) ? removeFavorite(mealId) : addFavorite(mealId);
  }

  return (
    <Pressable
      onPress={handleFavorite}
      style={({ pressed }) => pressed && styles.pressedButton}
    >
      <Ionicons
        name={ids.includes(mealId) ? "star" : "star-outline"}
        size={18}
        color={Colors.primary800}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressedButton: {
    opacity: 0.75,
  },
});
export default FavoriteIcon;

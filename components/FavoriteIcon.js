import { Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../constants/colors";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/faviritesSlice";

function FavoriteIcon({ mealId }) {
  // const { ids, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const ids = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  function handleFavorite() {
    // ids.includes(mealId) ? removeFavorite(mealId) : addFavorite(mealId);
    ids.includes(mealId)
      ? dispatch(removeFavorite({ id: mealId }))
      : dispatch(addFavorite({ id: mealId }));
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

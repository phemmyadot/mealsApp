import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: Colors.white }}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: color },
          pressed && styles.pressedButton,
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 120,
    borderRadius: 8,
    elevation: 4,
    shadowColor: Colors.white,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
    borderRadius: 8,
  },
  pressedButton: {
    opacity: Platform.OS === "ios" && 0.75,
    backgroundColor: Platform.OS === "ios" && Colors.white,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.primary800,
  },
});

export default CategoryGridTile;

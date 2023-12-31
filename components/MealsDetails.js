import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

function MealsDetails({
  duration,
  complexity,
  affordability,
  style,
  textColor,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItem, textColor && { color: textColor }]}>
        {duration}m
      </Text>
      <Text style={[styles.detailsItem, textColor && { color: textColor }]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailsItem, textColor && { color: textColor }]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
    gap: 8,
  },
  detailsItem: {
    fontSize: 16,
  },
});
export default MealsDetails;

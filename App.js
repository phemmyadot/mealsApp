import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverView from "./screens/MealsOverview";
import Colors from "./constants/colors";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        sceneContainerStyle: styles.background,
        headerStyle: styles.header,
        headerTintColor: Colors.accent600,
        headerBackTitleVisible: false,
        drawerContentStyle: {
          backgroundColor: Colors.primary200,
        },
        drawerInactiveTintColor: Colors.primary800,
        drawerActiveTintColor: Colors.white,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ size, color }) => (
            <Ionicons color={color} size={size} name="list" />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        options={{
          title: "Favorites",
          drawerIcon: ({ size, color }) => (
            <Ionicons color={color} size={size} name="star" />
          ),
        }}
        component={FavoritesScreen}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              contentStyle: styles.background,
              headerStyle: styles.header,
              headerTintColor: Colors.accent600,
              headerBackTitleVisible: false,
            }}
          >
            <Stack.Screen
              name="Home"
              options={{ headerShown: false }}
              component={DrawerNavigator}
            />
            <Stack.Screen name="MealsOverview" component={MealsOverView} />
            <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    backgroundColor: Colors.primary800,
  },
  header: {
    backgroundColor: Colors.primary200,
  },
});

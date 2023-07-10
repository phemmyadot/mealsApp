import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./faviritesSlice";

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});

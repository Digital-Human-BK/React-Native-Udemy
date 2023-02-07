import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./favoritesSlice";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export const selectFavorites = (state) => state.favorites.ids;

export default store;

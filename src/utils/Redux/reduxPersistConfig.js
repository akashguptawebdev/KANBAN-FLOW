import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import taskReducer from './TaskSlice'; // Ensure correct path
import searchReducer from "./searchSlice"
// Persist configuration
const persistConfig = {
  key: 'root', // The key in storage
  storage, // The storage engine to use
};

// Combine reducers
const rootReducer = combineReducers({
  task: taskReducer,
  search: searchReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        // Optionally ignore paths within the action/state
        ignoredActionPaths: ["register", "rehydrate"],
        ignoredPaths: ["register", "rehydrate"],
      },
    }),
});

// Create a persistor instance
export const persistor = persistStore(store);
export default store;

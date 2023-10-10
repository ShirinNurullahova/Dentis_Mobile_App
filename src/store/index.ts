import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import userReducer from './reducers/userReducer';
import smoothScrollReducer from './reducers/smoothScrollReducer';

const persistConfig = {
  key: 'token',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  user: userReducer,
  smoothScroll: smoothScrollReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default store;

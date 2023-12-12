import {createSlice, configureStore, PayloadAction} from '@reduxjs/toolkit';
import {History, ScoresState} from './store.modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const initialState: ScoresState = {
  tableScore: [],
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export const scoreSlice = createSlice({
  name: 'Scores',
  initialState,
  reducers: {
    addScoreToHistory: (state, action: PayloadAction<History>) => {
      state.tableScore.push(action.payload);
    },
  },
});

const persistedReducer = persistReducer(persistConfig, scoreSlice.reducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
export default store;

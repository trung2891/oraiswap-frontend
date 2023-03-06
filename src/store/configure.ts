import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tokenReducer from '../reducer/token';
import configReducer from '../reducer/config';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { PERSIST_CONFIG_KEY } from './constants';

const rootPersistConfig = {
  key: PERSIST_CONFIG_KEY,
  storage
};

const rootReducer = combineReducers({
  config: configReducer,
  token: tokenReducer
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
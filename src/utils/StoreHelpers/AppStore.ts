import {configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {rootReducer} from '@utils/StoreHelpers/Reducers';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {reduxPersistStorage} from '@utils/StoreHelpers/MMKVStorage';

const persistConfig = {
  key: 'root',
  storage: reduxPersistStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const appStore = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(appStore);
export type AppStoreRootState = ReturnType<typeof appStore.getState>;
export type AppStoreDispatch = typeof appStore.dispatch;
export const useAppDispatch = () => useDispatch<AppStoreDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppStoreRootState> =
  useSelector;

import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import { AuthReducer, SettingReducer } from '../Reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalReducer from '../Reducers/ModalReducer/ModalReducer';



const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blackList: ['auth', "setting"],
};

const reducers = combineReducers({
  auth: AuthReducer,
  setting: SettingReducer,
  modal: ModalReducer,
});

const _persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});
const persistor = persistStore(store)
export {
  store, persistor
}

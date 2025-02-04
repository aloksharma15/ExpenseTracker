import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import expenseReducer from './reducer/expenseReducer';

const rootReducer = combineReducers({
  expenses: expenseReducer,
});

const storeApp = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof storeApp.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default storeApp;

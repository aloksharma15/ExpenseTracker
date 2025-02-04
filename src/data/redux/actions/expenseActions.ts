import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  ADD_EXPENSE,
  CANCEL_EDIT_DATA_EXPENSE,
  EDIT_EXPENSE,
  FETCH_EXPENSES,
  REMOVE_EXPENSE,
  SET_EDIT_DATA_EXPENSE,
} from '../const/expenseConst';
import {typeExpense} from './../../../component/const';

interface Expense {
  id: string;
  description: string;
  amount: number;
  type: typeof typeExpense;
  date: string;
}
export const fetchExpenses = createAsyncThunk<Expense[]>(
  FETCH_EXPENSES,
  async () => {
    return [];
  },
);

export const addExpense = createAsyncThunk<Expense, Omit<Expense, 'id'>>(
  ADD_EXPENSE,
  async expense => {
    const newExpense = {...expense, id: String(Date.now())};
    return newExpense;
  },
);

export const editExpense = createAsyncThunk<Expense, Expense>(
  EDIT_EXPENSE,
  async expense => {
    return expense;
  },
);

export const setEditDataExpense = createAsyncThunk<Expense, Expense>(
  SET_EDIT_DATA_EXPENSE,
  async expense => {
    return expense;
  },
);

export const cancelEditDataExpense = createAsyncThunk<null, null>(
  CANCEL_EDIT_DATA_EXPENSE,
  async expense => {
    return expense;
  },
);

export const removeExpense = createAsyncThunk<void, string>(
  REMOVE_EXPENSE,
  async expenseId => {
    return;
  },
);

import {createSlice} from '@reduxjs/toolkit';
import {typeExpense} from '../../../component/const';
import {
  addExpense,
  cancelEditDataExpense,
  editExpense,
  fetchExpenses,
  removeExpense,
  setEditDataExpense,
} from '../actions/expenseActions';

interface Expense {
  id: string;
  description: string;
  amount: number;
  type: typeof typeExpense;
  date: string;
}

interface ExpensesState {
  expenses: Expense[];
  loading: boolean;
  editingExpense: Expense | null;
}

const initialState: ExpensesState = {
  expenses: [],
  loading: false,
  editingExpense: null,
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchExpenses.pending, state => {
        state.loading = true;
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.loading = false;
        state.expenses = action.payload;
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.expenses.push(action.payload);
      })
      .addCase(editExpense.fulfilled, (state, action) => {
        const editedExpense = action.payload;
        const index = state.expenses.findIndex(
          expense => expense.id === editedExpense.id,
        );
        if (index !== -1) {
          state.expenses[index] = editedExpense;
          state.editingExpense = null;
        }
      })
      .addCase(setEditDataExpense.fulfilled, (state, action) => {
        const editedExpenseData = action.payload;
        state.editingExpense = editedExpenseData;
      })
      .addCase(cancelEditDataExpense.fulfilled, (state, action) => {
        state.editingExpense = null;
      })
      .addCase(removeExpense.fulfilled, (state, action) => {
        const expenseId = action.meta.arg;
        state.expenses = state.expenses.filter(
          expense => expense.id !== expenseId,
        );
      });
  },
});

export default expensesSlice.reducer;

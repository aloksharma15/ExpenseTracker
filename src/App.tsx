import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';
import AddEditExpenseForm from './component/addEditExpenseForm';
import {color} from './component/const';
import ExpenseList from './component/expenseList';
import HeaderExpenseStatus from './component/headerExpensesStatus';
import {
  addExpense,
  cancelEditDataExpense,
  editExpense,
  fetchExpenses,
  removeExpense,
  setEditDataExpense,
} from './data/redux/actions/expenseActions';
import {RootState} from './data/redux/store';
import {horizontalScale, moderateScale, verticalScale} from './helper/scale';
import { sortDescByDate } from './helper/sort';

function App(): React.JSX.Element {
  const dispatch = useDispatch();
  const expenses = useSelector((state: RootState) => state.expenses.expenses);
  const loading = useSelector((state: RootState) => state.expenses.loading);
  const editingExpense = useSelector(
    (state: RootState) => state.expenses.editingExpense,
  );
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : color.primary,
    flex: 1,
  };

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  const handleAddExpense = (newExpense: any) => {
    dispatch(addExpense(newExpense));
  };

  const handleEditExpense = (editedExpense: any) => {
    dispatch(editExpense(editedExpense));
  };

  const handleDeleteExpense = (expenseId: any) => {
    dispatch(removeExpense(expenseId));
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: color.gray}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View style={styles.wrapperContainer}>
        <View style={{flex: 1}}>
          <HeaderExpenseStatus />
        </View>
        <View style={styles.container}>
          {editingExpense ? (
            <AddEditExpenseForm
              expense={editingExpense}
              onSubmit={handleEditExpense}
              onBack={(data: any) => dispatch(cancelEditDataExpense(null))}
            />
          ) : (
            <View style={{flex: 1, flexDirection: 'column'}}>
              <AddEditExpenseForm onSubmit={handleAddExpense} />
              <Text style={styles.titleList}>
                Daftar Pendapatan & Pengeluaran
              </Text>
              {loading ? (
                <Text>Loading...</Text>
              ) : (
                <ExpenseList
                  expenses={expenses}
                  onEdit={(data: any) => dispatch(setEditDataExpense(data))}
                  onDelete={handleDeleteExpense}
                />
              )}
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapperContainer: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    backgroundColor: color.white,
  },
  container: {
    flex: 3.5,
    marginVertical: verticalScale(20),
    marginHorizontal: horizontalScale(8),
    backgroundColor: color.white,
  },
  titleList: {
    fontSize: moderateScale(18),
    marginVertical: verticalScale(10),
    fontWeight: 'bold',
    color: color.text,
  },
});

export default App;

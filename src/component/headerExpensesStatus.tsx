import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../data/redux/store';
import {formatRupiah} from '../helper/format';
import {moderateScale, verticalScale} from '../helper/scale';
import {cardStyle, color, radius, typeExpense} from './const';

const HeaderExpenseStatus = () => {
  const totalAmountIn = useSelector((state: RootState) => {
    return state.expenses.expenses
      .filter((expense: any) => expense.type === typeExpense[0])
      .reduce((total: any, expense: any) => total + expense.amount, 0);
  });

  const totalAmountOut = useSelector((state: RootState) => {
    return state.expenses.expenses
      .filter((expense: any) => expense.type === typeExpense[1])
      .reduce((total: any, expense: any) => total + expense.amount, 0);
  });

  return (
    <View style={styles.card}>
      <View style={{marginVertical: verticalScale(8)}}>
        <Text style={{color: color.white, fontSize: moderateScale(14)}}>
          Saldo
        </Text>
        <Text style={{color: color.white, fontSize: moderateScale(40)}}>
          {formatRupiah(totalAmountIn - totalAmountOut)}
        </Text>
      </View>
      <View style={styles.containerWrap}>
        {typeExpense.map(data => {
          return (
            <View
            key={data + '-type'}
              style={{
                flex: 1,
              }}>
              <View style={styles.cardAmountExpense}>
                <Text
                  style={[
                    styles.textType,
                    {
                      color:
                        data === typeExpense[0]
                          ? color.positive
                          : color.negative,
                    },
                  ]}>
                  {data}
                </Text>
                <Text style={styles.textAmount}>
                  {data === typeExpense[0]
                    ? formatRupiah(totalAmountIn)
                    : formatRupiah(totalAmountOut)}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerWrap: {
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    ...cardStyle,
    backgroundColor: '#058473',
    padding: 16,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cardAmountExpense: {
    ...cardStyle,
    borderRadius: radius.s,
    backgroundColor: color.white,
    marginHorizontal: moderateScale(4),
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(5),
  },
  textType: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    color: color.text,
  },
  textAmount: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginVertical: verticalScale(2),
    color: color.text,
  },
});
export default HeaderExpenseStatus;

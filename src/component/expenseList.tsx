import React from 'react';
import {Alert, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {formatDate, formatRupiah} from '../helper/format';
import {horizontalScale, moderateScale, verticalScale} from '../helper/scale';
import {cardStyle, color, typeExpense} from './const';

const ExpenseList = ({expenses, onEdit, onDelete}: any) => {
  const cardType = (item: any) => (
    <View
      style={[
        styles.cardTypeWrap,
        {
          backgroundColor:
            item.type == typeExpense[0] ? color.bgsuccess : color.bgerror,
        },
      ]}>
      <Text
        style={{
          color: item.type == typeExpense[0] ? color.positive : color.negative,
          fontSize: 18,
        }}>
        {item.type == typeExpense[0] ? '+' : '-'}
      </Text>
    </View>
  );

  const renderItem = ({item}: any) => (
    <TouchableOpacity onPress={() => onEdit(item)}>
      <View
        style={[
          cardStyle,
          {
            padding: 10,
            borderRadius: moderateScale(6),
            backgroundColor: '#fff',
            marginVertical: verticalScale(8),
          },
        ]}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          {cardType(item)}
          <View
            style={{
              flex: 7,
              paddingHorizontal: horizontalScale(6),
              justifyContent: 'center',
            }}>
            <Text style={{color: color.text}}>{item.description}</Text>
            <Text style={{color: color.text}}>{formatRupiah(item.amount)}</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => 
                {
                  Alert.alert(
                    'Konfirmasi',
                    `Apakah kamu yakin menghapus ${item.type} - ${item?.description} senilai ${formatRupiah(item.amount)}?`,
                    [
                      {
                        text: 'Cancel',
                        onPress: () => {},
                        style: 'cancel',
                      },
                      { text: 'OK', onPress: () =>   onDelete(item.id)},
                    ],
                    { cancelable: false }
                  );
                }
              }
              
              style={{
                marginTop: 5,
                flex: 1,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'red',
                  textAlign: 'center',
                  fontSize: moderateScale(12),
                }}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{textAlign: 'right', fontSize: moderateScale(10), color: color.text}}>
          {/* {item?.date} */}
              {formatDate(item?.date)}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    // <View sty>
      <FlatList
      contentContainerStyle={{ flexGrow: 1 }}
        data={expenses}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    // </View>
  );
};

const styles = StyleSheet.create({
  cardTypeWrap: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExpenseList;

import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {showAlert} from '../helper/alert';
import {horizontalScale, moderateScale, verticalScale} from '../helper/scale';
import {cardStyle, color, typeExpense} from './const';

const AddEditExpenseForm = ({expense, onSubmit, onBack}: any) => {
  const [description, setDescription] = useState(
    expense ? expense.description : '',
  );
  const [amount, setAmount] = useState(
    expense ? expense.amount?.toString() : '',
  );
  const [type, setType] = useState(expense ? expense.type : 'Pendapatan');

  const handleAddExpense = () => {
    if (isNaN(amount)) {
      showAlert(
        'Gaggal',
        'Periksa Kembali Inputan anda, Jumlah seharusnya berupa angka',
      );
      return;
    }
    const newExpense = {
      id: expense ? expense.id : String(Date.now()),
      description,
      amount: parseFloat(amount),
      type: type,
      date: expense ? expense.date : Date.now(),
    };

    if (
      description == '' ||
      description == null ||
      amount == null ||
      amount == '0'
    ) {
      showAlert('Gagal', 'Periksa Kembali Inputan anda');
    } else {
      onSubmit(newExpense);
      setDescription('');
      setAmount('');
      setType(typeExpense[0]);
      Keyboard.dismiss();
      showAlert(
        'Berhasil',
        `Berhasil ${expense ? 'Memperbarui' : 'Menambahkan'} Data`,
      );
    }
  };

  return (
    <KeyboardAvoidingView>
      <View
        style={[
          cardStyle,
          {
            backgroundColor: '#fff',
            paddingHorizontal: horizontalScale(10),
            paddingVertical: verticalScale(10),
            borderRadius: 6,
            marginVertical: verticalScale(10)
          },
        ]}>
       {expense &&  <Text style={{textAlign: 'center', color: color.text, fontWeight: '600', fontSize: moderateScale(18)}}>Edit Data</Text>}
        <TextInput
          placeholderTextColor={color.gray}
          style={styleInput.input}
          placeholder="Deskripsi"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
         placeholderTextColor={color.gray}
          style={styleInput.input}
          placeholder="Jumlah"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <View style={{display: 'flex', flexDirection: 'row'}}>
          {typeExpense.map(item => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setType(item);
                }}
                key={item}
                style={{
                  flex: 1,
                  marginVertical: verticalScale(10),
                }}>
                <View
                  style={{
                    paddingVertical: verticalScale(10),
                    marginHorizontal: verticalScale(4),
                    borderColor: type == item ? color.primary : color.gray,
                    borderRadius: 4,
                    borderWidth: 1,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: type == item ? color.primary : color.gray,
                      fontWeight: type == item ? 'bold' : 'normal',
                    }}>
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <TouchableOpacity
          onPress={handleAddExpense}
          style={styleInput.buttonAction}>
          <Text style={{textAlign: 'center', color: color.white}}>
            {expense ? 'Simpan' : 'Tambah'}
          </Text>
        </TouchableOpacity>
        {expense && (
          <TouchableOpacity
            onPress={() => {
              onBack();
            }}
            style={styleInput.buttonBack}>
            <Text style={{textAlign: 'center', color: color.primary}}>
              Kembali
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styleInput = StyleSheet.create({
  input: {
    borderColor: 'gray',
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginVertical: 4,
    color: color.text
  },
  buttonAction: {
    justifyContent: 'center',
    backgroundColor: color.primary,
    paddingHorizontal: horizontalScale(6),
    paddingVertical: verticalScale(14),
    borderRadius: 6,
  },
  buttonBack: {
    justifyContent: 'center',
    borderColor: color.primary,
    borderWidth: 1,
    paddingHorizontal: horizontalScale(6),
    paddingVertical: verticalScale(14),
    borderRadius: 6,
    marginVertical: verticalScale(4),
  },
});

export default AddEditExpenseForm;

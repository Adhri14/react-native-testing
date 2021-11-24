import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {TextInput, Button} from '../../components';
import {setData} from '../../utils';

const SignUp = ({navigation}) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    houseNumber: '',
    phoneNumber: '',
    password: '',
    password_confirmation: '',
  });

  const onSubmit = () => {
    console.log('form: ', form);
    axios
      .post('http://foodmarket-backend.buildwithangga.id/api/register', form)
      .then(res => {
        console.log(res.data.data);
        navigation.reset({
          index: 1,
          routes: [{name: 'Home'}],
        });
        // res.data.data.token_type + ' ' + res.data.data.access_token
        setData('token', {
          value: `${res.data.data.token_type} ${res.data.data.access_token}`,
        }); // Bearer Token
        setData('userProfile', {user: res.data.data.user});
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Daftar Akun</Text>
          <TextInput
            title="Nama"
            placeholder="Masukkan nama"
            value={form.name}
            onChangeText={value => setForm({...form, name: value})}
          />
          <TextInput
            title="Email"
            placeholder="Masukkan email"
            keyboardType="email-address"
            value={form.email}
            onChangeText={value => setForm({...form, email: value})}
          />
          <TextInput
            title="Alamat"
            placeholder="Masukkan alamat"
            value={form.address}
            onChangeText={value => setForm({...form, address: value})}
          />
          <TextInput
            title="Kota"
            placeholder="Masukkan kota"
            value={form.city}
            onChangeText={value => setForm({...form, city: value})}
          />
          <TextInput
            title="No. Rumah"
            placeholder="Masukkan No. Rumah"
            value={form.houseNumber}
            onChangeText={value => setForm({...form, houseNumber: value})}
          />
          <TextInput
            title="Telepon"
            placeholder="Masukkan telepon"
            keyboardType="number-pad"
            value={form.phoneNumber}
            onChangeText={value => setForm({...form, phoneNumber: value})}
          />
          <TextInput
            title="Password"
            placeholder="Masukkan password"
            secureTextEntry
            value={form.password}
            onChangeText={value => setForm({...form, password: value})}
          />
          <TextInput
            title="Ulangi Password"
            placeholder="Masukkan password"
            secureTextEntry
            value={form.password_confirmation}
            onChangeText={value =>
              setForm({...form, password_confirmation: value})
            }
          />
          <Button title="Registrasi" onPress={onSubmit} />
          <Text style={styles.link}>
            Apakah anda punya akun?{' '}
            <Text
              onPress={() => navigation.navigate('Login')}
              style={styles.highlight}>
              Login
            </Text>
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#202020',
    textAlign: 'center',
    marginVertical: 20,
  },
  container: {
    width: '100%',
    paddingHorizontal: 20,
  },
  link: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#b0b0b0',
    textAlign: 'center',
  },
  highlight: {
    color: '#202020',
    fontFamily: 'Poppins-SemiBold',
  },
});

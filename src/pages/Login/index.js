import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {TextInput, Button} from '../../components';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            title="Email"
            placeholder="Masukkan email"
            keyboardType="email-address"
          />
          <TextInput
            title="Password"
            placeholder="Masukkan password"
            secureTextEntry
          />
          <Button title="Login" onPress={() => navigation.navigate('Home')} />
          <Text style={styles.link}>
            Apakah anda belum punya akun?{' '}
            <Text
              onPress={() => navigation.navigate('SignUp')}
              style={styles.highlight}>
              Daftar Akun
            </Text>
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;

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

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../components';
import {WebView} from 'react-native-webview';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Selamat datang</Text>
      <View style={styles.container}>
        <Button title="Keluar" onPress={() => navigation.navigate('SignUp')} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
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
});

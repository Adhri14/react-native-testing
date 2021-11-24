import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getData} from '../../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then(res => {
        if (res) {
          navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
        } else {
          navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
          });
        }
      });
    }, 3000);
  }, []);
  return (
    <View>
      <Text>Page SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});

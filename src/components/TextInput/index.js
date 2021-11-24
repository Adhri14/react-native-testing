import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';

const TextInput = ({
  title,
  placeholder,
  keyboardType,
  secureTextEntry,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <TextInputRN
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {width: '100%', marginBottom: 10},
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#202020',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
});

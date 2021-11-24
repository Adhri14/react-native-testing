import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // read error
    console.log(e.message);
  }
};

// setData('token', res.data.data)

// getData('token').then(res => console.log(res))

export const setData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // save error
    console.log(e.message);
  }
};

export const removeData = async (key1, key2) => {
  const keys = [key1, key2];
  try {
    await AsyncStorage.multiRemove(keys);
  } catch (e) {
    // remove error
    console.log(e.message);
  }
};

import AsyncStorage from "@react-native-async-storage/async-storage";

async function saveToken(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
}



const getToken = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
        return value;
    }
  } catch (e) {
    console.log(e)
  }
};


const removeToken = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
      console.log(error);
  }
};


export { saveToken, getToken, removeToken };

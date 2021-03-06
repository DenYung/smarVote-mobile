import React, {useContext} from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { navigationContext } from '../../context/Context';

function WelcomeSignupBtn() {
  const navigator = useContext(navigationContext);

  return (
    <TouchableOpacity
      onPress={() => navigator.nav.navigate("Login")}
      style={style.container}
    >
      <Text style={style.text}>STUDENT</Text>
    </TouchableOpacity>
  );
}

export default WelcomeSignupBtn;

const style = StyleSheet.create({
  container: {
    height: "3.5rem",
    width: "20rem",
    backgroundColor: "#5ebdf5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.5rem",
    margin: "1rem",
  },

  text: {
    color: "#fff",
  },
});

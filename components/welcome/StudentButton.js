import React, {useContext} from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { navigationContext } from '../../context/Context';

function AdminButton() {

  const navigator = useContext(navigationContext)
  return (
    <TouchableOpacity
      onPress={() => navigator.nav.navigate("Admin")}
      style={style.container}
    >
      <Text style={style.text}>ADMINISTRATOR</Text>
    </TouchableOpacity>
  );
}

export default AdminButton;

const style = StyleSheet.create({
  container: {
    height: "3.5rem",
    width: "20rem",
    backgroundColor: "#ecedf3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.5rem",
  },

  text: {
    color: "#1586d1",
  },
});

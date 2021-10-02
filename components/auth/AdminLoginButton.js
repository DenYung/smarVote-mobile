import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import axios from "axios";
import Spinner from "../../ui/Spinner";
import { saveToken } from "../auth/Storage";

function AdminLoginButton({ navigation, data }) {
  const [loading, setLoading] = useState(false);

  function auth() {
    setLoading(true);
    axios
      .post("https://smartvote124.herokuapp.com/api/admin/login", data)
      .then((response) => {
        setLoading(false);
        const token = response.data.token;
        saveToken("accessToken", token);

        navigation.navigate("Dashboard");
      })
      
      .catch((error) => {
        setLoading(false);
        console.log(error.response);
      });
  }

  function Touchable() {
    return (
      <TouchableOpacity onPress={() => auth()} style={style.container}>
        <Text style={style.text}>LOGIN</Text>
      </TouchableOpacity>
    );
  }

  return <View>{loading ? <Spinner /> : <Touchable />}</View>;
}

export default AdminLoginButton;

const style = StyleSheet.create({
  container: {
    height: "3.5rem",
    width: "15rem",
    backgroundColor: "#5ebdf5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.5rem",
  },

  text: {
    color: "#fafafa",
  },
});

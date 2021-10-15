import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import axios from "axios";
import Spinner from "../../ui/Spinner";
import { saveToken } from "../auth/Storage";

function LoginButton({ navigation, data }) {
  const [loading, setLoading] = useState(false);

  function auth() {
    setLoading(true);
    axios
      .post("https://smartvote124.herokuapp.com/api/student/login", data)
      .then((response) => {
        setLoading(false);
        navigation.navigate("Feed");
          const token = response.data.token;
          saveToken("accessToken", token);
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

export default LoginButton;

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

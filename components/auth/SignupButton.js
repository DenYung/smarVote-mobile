import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import axios from "axios";
import Spinner from "../../ui/Spinner";

function SignupButton({ navigation, data }) {
  const [loading, setLoading] = useState(false);

  

  function auth() {
    setLoading(true);
    axios
      .post("https://smartvote124.herokuapp.com/api/student/register", data)
      .then((response) => {
        setLoading(false);
        navigation.navigate("Feed");
        console.log(response);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response);
      });
  }

  function Touchable() {
    return (
      <TouchableOpacity onPress={() => auth()} style={style.container}>
        <Text style={style.text}>SIGN UP</Text>
      </TouchableOpacity>
    );
  }

  return <View>{loading ? <Spinner /> : <Touchable />}</View>;
}

export default SignupButton;

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

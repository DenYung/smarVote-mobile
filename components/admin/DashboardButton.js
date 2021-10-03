import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import axiosInstance from "../../AxiosInstance";
import Spinner from "../../ui/Spinner";

function DashboardButton({ data, navigation }) {
  const [loading, setLoading] = useState(false);

  function postPoll() {
    const arr = [];

    const { poll, inputValues } = data;

    Object.values(inputValues).map((a) => {
      arr.push(a);
    });

    if (poll === "" || arr.length === 0) {
      return alert("poll and options fields cannot be empty");
    }

    const info = {
      poll: poll,
      options: arr,
    };


    setLoading(true);
    axiosInstance
      .post("/admin/poll", info)
      .then((res) => {
        setLoading(false);
        navigation.navigate("Polls");
      })
      .catch((err) => {
        setLoading(false);
      });
  }

  function Touchable() {
    return (
      <TouchableOpacity style={style.container} onPress={() => postPoll()}>
        <Text style={style.text}>POST</Text>
      </TouchableOpacity>
    );
  }

  return <View>{loading ? <Spinner /> : <Touchable />}</View>;
}

export default DashboardButton;

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

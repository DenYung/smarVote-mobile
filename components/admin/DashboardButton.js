import React, { useState, useContext } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import axiosInstance from "../../AxiosInstance";
import Spinner from "../../ui/Spinner";
import { pollContext } from '../../context/Context';

function DashboardButton({ data, navigation }) {
  const context = useContext(pollContext);
  const [loading, setLoading] = useState(false);

  function postPoll() {
    
    const arr = [];
    const picArr = []
     

    const { title, participants , pics } = data;

    Object.values(participants).map((a) => {
      arr.push(a);
    });

    Object.values(pics).map((a) => {
      picArr.push(a);
    })

    if (title === "" || arr.length === 0) {
      return alert("participants and name fields cannot be empty");
    }

    const info = {
      title: title,
      participants: arr,
      pics: picArr
    };

   

    setLoading(true);
    axiosInstance
      
      .post("/admin/poll", info)
      .then((res) => {
        setLoading(false);
        context.posted = context.posted === true ? false : true;
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
    backgroundColor: "#403dec",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.5rem",
  },

  text: {
    color: "#fafafa",
  },
});

import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import axiosInstance from "../../AxiosInstance";

function FeedModel({ title, participants, images, id }) {
  const data = [];

  Object.keys(participants).forEach((key) => {
    const ob = {};
    ob.name = key;
    ob.value = participants[key];
    data.push(ob);
  });

  function castVote(a, id) {
    const { name } = a;
    axiosInstance
      .post("/student/vote", {
        id: id,
        choice: name,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>

      {data.map((a, i) => (
        <View>
          <TouchableOpacity onPress={() => castVote(a, id)}>
            <View style={style.participants}>
              <Image style={style.image} source={{ uri: images[i] }} />
              <ProgressBar
                key={i}
                style={style.bar}
                progress={a.value / 100}
                width={250}
                height={30}
                size={50}
              />
            </View>
          </TouchableOpacity>

          <View style={style.display}>
            <Text>{a.name}</Text>
            <Text>{a.value + " votes"}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

export default FeedModel;
const style = StyleSheet.create({
  container: {
    minHeight: "10rem",
    width: "22rem",
    backgroundColor: "#f0f0f0",
    margin: "0.5rem",
    borderRadius: "0.5rem",
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: "1rem",
  },
  participants: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    backgroundColor: "#c1baeb",
    height: "70px",
    width: "70px",
    borderRadius: "100px",
    margin: "5px",
  },
  bar: {
    margin: "0.3rem",
  },
  display: {
    margin: "0.3rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

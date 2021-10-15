import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import ProgressBar from "react-native-progress/Bar";
const defaultImage = require("../../assets/camera.png");

function PollModel({ title, participants, images }) {
  const data = [];
   

  Object.keys(participants).forEach((key) => {
    const ob = {};
    ob.name = key;
    ob.value = participants[key];
    data.push(ob);
  });

  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>

      <View style={style.progress}>
        {data.map((a, i) => (
          <View>
            <View style={style.participants}>
              <Image source={{ uri: images[i] }} style={style.image}  defaultSource={defaultImage} />
              <ProgressBar
                key={i}
                style={style.bar}
                progress={a.value / 500}
                width={250}
                height={30}
                size={50}
              />
            </View>

            <View style={style.display}>
              <Text>{a.name}</Text>
              <Text>{a.value + " votes"}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

export default PollModel;

const style = StyleSheet.create({
  container: {
    minHeight: "5rem",
    backgroundColor: "#fff",
    display: "flex",
    margin: "0.5rem",
    alignItems: "center",
    padding: "1rem",
    borderRadius: "0.5rem",
  },
  progress: {
    margin: "1rem",
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
  title: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  image: {
    backgroundColor: "#c1baeb",
    height: "70px",
    width: "70px",
    borderRadius: "100px",
    margin: "5px",
  },
  participants: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

});

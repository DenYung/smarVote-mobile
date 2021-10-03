import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ProgressBar from "react-native-progress/Bar";

function PollModel({ title, options }) {
  const data = [];

  Object.keys(options).forEach((key) => {
    const ob = {};
    ob.name = key;
    ob.value = options[key];
    data.push(ob);
  });

  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>

      <View style={style.progress}>
        {data.map((a, i) => (
          <View>
            <ProgressBar
              key={i}
              style={style.bar}
              progress={a.value / 100}
              width={250}
              height={30}
              size={50}
              onPress={() => console.log("hello")}
            />
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
});

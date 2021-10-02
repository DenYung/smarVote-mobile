import React from "react";
import { StyleSheet, Text, View } from "react-native";

function WelcomeText() {
  return (
    <View style={style.container}>
      <Text style={style.title}>SmartVote</Text>
      <Text style={style.text}>We help you make decision the smart way with less stress</Text>
    </View>
  );
}

export default WelcomeText;

const style = StyleSheet.create({
    container: {
        flex: 0.5,
        justifyContent: 'flex-start',
        padding: "1rem"
    },
    title: {
        color: "#fff",
        fontSize: '3rem',
    },
    text: {
        color: "#9bcdee"
    }
})

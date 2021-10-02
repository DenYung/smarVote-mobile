import React from "react";
import { SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import { wave } from "../Base64/Base64Images";
import StudentButton from "../components/welcome/StudentButton";
import AdminButton from "../components/welcome/AdminButton";
import WelcomeText from "../components/welcome/WelcomeText";
import { navigationContext } from '../context/Context';

function Welcome({ navigation }) {

  return (
    <navigationContext.Provider value = {{nav: navigation}}>
      <SafeAreaView style={style.container}>
        <ImageBackground source={wave} style={style.image}>
          <WelcomeText />
          <AdminButton />
          <StudentButton />
        </ImageBackground>
      </SafeAreaView>
    </navigationContext.Provider>
  );
}

export default Welcome;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

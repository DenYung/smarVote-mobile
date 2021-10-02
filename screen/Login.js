import React, { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, Text } from "react-native";
import Input from "../ui/Input";
import LoginButton from "../components/auth/LoginButton";
import { wave } from "../Base64/Base64Images";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = { email, password };

  return (
    <SafeAreaView style={style.safeArea}>
      <ImageBackground source={wave} style={style.container}>
        <Input placeholder="email" onChangeText={(email) => setEmail(email)} />
        <Input
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />

        <LoginButton data={data} navigation={navigation} />

        <Text style={style.signupText}>
          Not having an account?{" "}
          <Text
            onPress={() => navigation.navigate("Signup")}
            style={style.signup}
          >
            Sign up!
          </Text>
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Login;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  safeArea: {
    flex: 1,
  },
  signupText: {
    marginTop: "20px",
    color: "#fff",
  },
  signup: {
    color: "#87edfa",
    fontSize: "1rem",
  },
});

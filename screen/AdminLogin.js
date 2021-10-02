import React, { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, Text } from "react-native";
import Input from "../ui/Input";
import AdminLoginButton from "../components/auth/AdminLoginButton";
import { wave } from "../Base64/Base64Images";

function AdminLogin({ navigation }) {
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

        <AdminLoginButton data={data} navigation={navigation} />

      </ImageBackground>
    </SafeAreaView>
  );
}

export default AdminLogin;

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

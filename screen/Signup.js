import React, { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet, Text } from "react-native";
import Input from "../ui/Input";
import SignupButton from "../components/auth/SignupButton";
import { wave } from "../Base64/Base64Images";

function Signup({ navigation }) {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [faculty, setFaculty] = useState("");

  const data = {
    first_name,
    last_name,
    email,
    password,
    faculty
  };

  return (
    <SafeAreaView style={style.safeArea}>
      <ImageBackground source={wave} style={style.container}>
        <Input
          placeholder="firstname"
          onChangeText={(firstname) => setFirstName(firstname)}
        />
        <Input
          placeholder="lastname"
          onChangeText={(lastname) => setLastName(lastname)}
        />
        <Input
          placeholder="email"
          onChangeText={(email) => setEmail(email)}
        />
        <Input
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <Input
          placeholder="faculty"
          onChangeText={(faculty) => setFaculty(faculty)}
        />

        <SignupButton data={data} navigation={navigation} />

        <Text style={style.loginText}>
          Already have an account?{" "}
          <Text
            onPress={() => navigation.navigate("Login")}
            style={style.login}
          >
            Login!
          </Text>
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Signup;

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
  loginText: {
    marginTop: "20px",
    color: "#140e0e",
  },
  login: {
    color: "#3aa2f7",
    fontSize: "1rem",
  },
});

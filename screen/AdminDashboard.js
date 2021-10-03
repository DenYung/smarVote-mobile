import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";
import { FloatingAction } from "react-native-floating-action";
import Input from "../ui/Input";
import { actions } from "../components/admin/Dashboard";
import DashboardButton from "../components/admin/DashboardButton";

function AdminDashboard() {
  const [counter, setCounter] = useState(0);
  const [inputValues, setInputValues] = useState({});

  function addInputField() {
    setCounter(counter + 1);
  }

  return (
    <SafeAreaView style={style.container}>
      <TextInput
        multiline={true}
        placeholder={"Write your poll..."}
        style={style.poll}
      />

      <FloatingAction
        actions={actions}
        iconColor="#fff"
        showBackground={false}
        distanceToEdge={20}
        position="right"
        onPressItem={(name) => {
          if (name === "add") {
            addInputField();
          }
        }}
        shadow={true}
      />

      {Array.from(Array(counter)).map((c, i) => {
        return (
          <Input
            key={i}
            onChangeText={(e) => {
              const options = {};
              options[counter] = e;
              setInputValues({ ...inputValues, ...options });
            }}
          />
        );
      })}

      <DashboardButton />
    </SafeAreaView>
  );
}

export default AdminDashboard;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    flex: 1,
    alignItems: "center",
  },
  poll: {
    minHeight: "20rem",
    margin: "1rem",
    backgroundColor: "#ccebfa",
    width: "20rem",
    padding: "1rem",
    borderRadius: "1rem",
  },
});

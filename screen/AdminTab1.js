import React, { useState, useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FloatingAction } from "react-native-floating-action";
import Input from "../ui/Input";
import { actions } from "../components/admin/Dashboard";
import DashboardButton from "../components/admin/DashboardButton";
import * as ImagePicker from "expo-image-picker";
 const pics = {};

function AdminTab1({ navigation }) {
  const [counter, setCounter] = useState(0);
  const [participants, setParticipants] = useState({});
  const [title, setTitle] = useState("");
  const [userImage, setUserImage] = useState("");
  const defaultImage = require("../assets/camera.png");
  
 

  function addInputField() {
    setCounter(counter + 1);
  }

  function viewPolls() {
    navigation.navigate("Polls");
  }

   let openImagePickerAsync = async () => {
     let permissionResult =
       await ImagePicker.requestMediaLibraryPermissionsAsync();

     if (permissionResult.granted === false) {
       alert("Permission to access camera roll is required!");
       return;
     }

     let pickerResult = await ImagePicker.launchImageLibraryAsync();
     setUserImage({ localUri: pickerResult.uri });
   };

  
  return (
    <SafeAreaView style={style.container}>
      <TextInput
        multiline={true}
        placeholder={"Title of poll..."}
        style={style.title}
        onChangeText={(title) => setTitle(title)}
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

          if (name === "view") {
            viewPolls();
          }
        }}
      />

      {Array.from(Array(counter)).map((c, i) => {
        return (
          <View style={style.participant}>
            <TouchableOpacity onPress={openImagePickerAsync}>
               
              <Image
                source={{uri: userImage.localUri}}
                resizeMode="center"
                defaultSource={defaultImage}
                style={style.image}
                onLoad={() => {
                  pics[counter] = userImage.localUri;
                }}
              />
            </TouchableOpacity>

            <Input
              style={style.inputs}
              key={i}
              onChangeText={(e) => {
                const options = {};
                options[counter] = e;
                setParticipants({ ...participants, ...options });
              }}
            />
          </View>
        );
      })}

      <DashboardButton navigation={navigation} data={{ participants, title, pics }} />
    </SafeAreaView>
  );
}

export default AdminTab1;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
  },
  title: {
    minHeight: "5rem",
    margin: "1rem",
    backgroundColor: "#d5d7f3",
    width: "20rem",
    padding: "1rem",
  },
  image: {
    backgroundColor: "#c1baeb",
    height: "70px",
    width: "70px",
    borderRadius: "100px",
    margin: "5px",
  },
  participant: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: {
    borderColor: "#5f93d6",
    borderWidth: "1px", 
    padding: "16px",
    width: "15rem",
    borderRadius: "5px",
    backgroundColor: "#ffff",
  },
});

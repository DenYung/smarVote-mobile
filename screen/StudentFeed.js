import React, { useEffect, useState } from "react";
import axiosInstance from "../AxiosInstance";
import { StyleSheet, Text, View, FlatList } from "react-native";
import FeedModel from "../components/student/FeedModel";
import Spinner from "../ui/Spinner";
import { removeToken } from "../components/auth/Storage";

function StudentFeed({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [poll, setPoll] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text onPress={() => {
          removeToken();
          navigation.navigate('Welcome');
         }} style={style.logout}>
          
          Logout
        </Text>
      ),
    });

    setLoading(true);
    axiosInstance
      .get("/student/feed")
      .then((res) => {
        const { data } = res;
        setPoll(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  const renderItem = ({ item, index }) => (
    <FeedModel
      title={item.title}
      key={index}
      id={item._id}
      participants={item.participants}
      images={item.pics}
    />
  );

  return (
    <View style={style.container}>
      {loading ? (
        <Spinner />
      ) : (
        <FlatList
          data={poll}
          renderItem={renderItem}
          key={(item) => item._id}
        />
      )}
    </View>
  );
}

export default StudentFeed;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#d2d2f8",
  },
  logout: {
    margin: "10px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#5363f3",
    padding: "5px",
    borderRadius: "5px",
  },
});

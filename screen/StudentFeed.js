import React, { useEffect, useState } from "react";
import axiosInstance from "../AxiosInstance";
import { StyleSheet, Text, View, FlatList } from "react-native";
import FeedModel from "../components/student/FeedModel";
import Spinner from "../ui/Spinner";

function StudentFeed() {
  const [loading, setLoading] = useState(false);
   const [poll, setPoll] = useState([]);
  
  useEffect(() => {
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


  const renderItem = ({ item, index }) => <FeedModel title={item.title} key={index} id={item._id} participants={item.participants} images={item.pics} />;

  return (
    <View style={style.container}>
      {loading ? <Spinner /> : <FlatList data={poll} renderItem={renderItem} key={item => item._id} />}
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
});

import React, { useContext, useEffect, useState } from "react";
import { StyleSheet,View, FlatList } from "react-native";
import PollModel from "../components/admin/PollModel";
import axiosInstance from "../AxiosInstance";
import Spinner from "../ui/Spinner";
import { pollContext } from "../context/Context";


function AdminTab2() {
  const [poll, setPoll] = useState([]);
  const [loading, setLoading] = useState(false);
  const context = useContext(pollContext);
 


  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/admin/poll")
      .then((res) => {
        const { data } = res;
        setPoll(data);
        setLoading(false);
      }) 
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [context.posted]);

  const renderItem = ({ item, index }) => (
    <PollModel title={item.title} key={index} participants={item.participants} images = {item.pics}  />
  );

  return (
    <View style={style.container} >
      {loading ? <Spinner /> : <FlatList data={poll} renderItem={renderItem} />}
    </View>
  );
}

export default AdminTab2;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#bdbaba",
    flex: 1,
  },
});

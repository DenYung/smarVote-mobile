import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import PollModel from '../components/admin/PollModel';
import axiosInstance from '../AxiosInstance';


function AdminTab2() {
    const [poll, setPoll] = useState([]);

    useEffect(() => {
        axiosInstance
            .get("/admin/poll")
            .then((res) => {
                const { data } = res;
                setPoll(data);
               
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    const renderItem = ({ item }) => <PollModel title ={item.poll} options = {item.options} />;
     

    return (
      <View style={style.container} onPress={() => console.log(poll)}>
            <FlatList data = {poll} renderItem={renderItem} />
      </View>
    );
}

export default AdminTab2;

const style = StyleSheet.create({
    container: {
        backgroundColor: "#c7d3f7",
        flex: 1
     }
});

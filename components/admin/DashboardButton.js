import React, {useState} from 'react';
import { TouchableOpacity, Text, StyleSheet} from "react-native";


function DashboardButton() {
    const [loading, setLoading] = useState(false);


     return (
      <TouchableOpacity style={style.container}>
        <Text style={style.text}>POST</Text>
      </TouchableOpacity>
    );
}

export default DashboardButton;

const style = StyleSheet.create({
    container: {
        height: "3.5rem",
        width: "15rem",
        backgroundColor: "#5ebdf5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0.5rem",
    },

    text: {
        color: "#fafafa",
    },
})

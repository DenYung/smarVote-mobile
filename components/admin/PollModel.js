import React, {useEffect,useState} from "react";
import { View, StyleSheet, Text } from "react-native";
import ProgressBar from "react-native-progress/Bar";

function PollModel({ title, options }) {
    const [data, setData] = useState([]);
    
    
    useEffect(() => {
      Object.keys(options).forEach((key) => {
        const ob = {};
        ob.name = key;
        ob.value = options[key];
         data.push(ob)
      });
    }, [])
    
    
  return (
    <View style={style.container}>
      <Text>{title}</Text>

      <View style={style.progress}>
        {data.map((a, i) => (
            <ProgressBar
            key={i}
            style={style.bar}
            progress={a.value / 10}
            width={300}
            height={30}
            size={50}
          />
        ))}
      </View>
    </View>
  );
}

export default PollModel;

const style = StyleSheet.create({
    container: {
        minHeight: '5rem',
        backgroundColor: "#fff",
        display: 'flex',
        margin: "1rem",
        alignItems: "center",
        padding: "1rem",
        borderRadius: '0.5rem'
    },
    progress: {
        margin: "1rem"
    },
    bar: {
        margin: "0.3rem"
    }
});

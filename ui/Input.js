import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

function Input({...children}) {
    return (
        <TextInput style={style.container} {...children} />
    )
}

export default Input;

const style = StyleSheet.create({
  container: {
    borderColor: "#5f93d6",
    borderWidth: "1px",
    padding: "16px",
    width: "20rem",
    borderRadius: "5px",
    marginBottom: "15px",
    backgroundColor: "#ffff",
  },
});

import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'

function Spinner() {
    return (
        <ActivityIndicator size="large" color="#30b2e6" style={style.spinner} />
    )
}

export default Spinner;

const style = StyleSheet.create({
    spinner: {
        margin: "1rem"
    }
})

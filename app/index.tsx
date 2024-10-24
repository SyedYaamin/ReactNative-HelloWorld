import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Hello World</Text>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    h1: {
        fontSize: 40,
        fontWeight:  'bold',
        color: 'yellowgreen',
    }
})
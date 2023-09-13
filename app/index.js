import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Card from './Card'

const Home = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Birthday Card</Text>
            <StatusBar barStyle="light-content" />
            <Card />
        </View>
    )
}

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        width: deviceWidth,
        height: 90,
        backgroundColor: '#4a4a4a',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#ffff',
        fontSize: 24,
        fontWeight: '700',
        fontStyle: 'italic',
    },
})

export default Home;
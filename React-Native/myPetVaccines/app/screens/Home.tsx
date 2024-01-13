import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS, icons, images, SIZES } from "../../constants";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenHeaderBtn } from '../../components';
const Stack = createNativeStackNavigator();

const Home = ({ navigation }: any) => {
    return (
        <View style={style.container}>

            <Text style={style.title}>My Pets</Text>
            <View style={style.elementContainer}>
                <Text>Home</Text>
                <Text>Home</Text>
            </View>
        </View>

    )
  
}

const style = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        backgroundColor: '#e2d9c8',
        overflow: 'hidden',
        height: '100%'
    },
    elementContainer: {
        marginHorizontal: 30,
        marginVertical: 50,
        flex: 1,
        justifyContent: 'flex-start',

    },
    title: {
        marginVertical: 4,
        height: 40,
        padding: 10,
    }
})
export default Home
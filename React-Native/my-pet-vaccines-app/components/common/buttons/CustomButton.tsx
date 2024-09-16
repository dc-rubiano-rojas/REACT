import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './login-button.style'

const CustomButton = ({handleOnPress, title}: any) => {
    return (

        <TouchableOpacity
            style={styles.buttonsLogin}
            onPress={() => handleOnPress()}
        >
            <Text style={styles.buttonsLoginText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton
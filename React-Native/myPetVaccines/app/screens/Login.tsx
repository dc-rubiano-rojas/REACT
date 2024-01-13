import { View, Text, Button, StyleSheet, TextInput, ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import styles from '../../styles/search'

const Login = ({ navigation }: any) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const auth = FIREBASE_AUTH
    const signIn = async () => {
        setLoading(true)
        try {
            const response = signInWithEmailAndPassword(auth, email, password)
            console.log(response);
        } catch (error: any) {
            console.log(error);
            alert('Sign in failed: ' + error.message)
        } finally {
            setLoading(false)
        }
    }
    const register = async () => {
        setLoading(true)
        try {
            const response = createUserWithEmailAndPassword(auth, email, password)
            console.log(response);
        } catch (error: any) {
            console.log(error);
            alert('register in failed: ' + error.message)
        } finally {
            setLoading(false)
            navigation.navigate('Home')
        }
    }

    return (
        <View style={styles.loginContainer}>
            <KeyboardAvoidingView behavior='padding'>

                <Text>Login</Text>
                <TextInput style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput secureTextEntry={true} style={styles.input} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>
                {loading ? <ActivityIndicator size='large' color='#0000ff' /> :
                    <>
                        <Button onPress={() => signIn()} title='Sign In' />
                        <Button onPress={() => register()} title='Register' />

                    </>
                }
            </KeyboardAvoidingView>

        </View>
    )
}



export default Login
import React, { useState } from "react";
import { ActivityIndicator, KeyboardAvoidingView, Text, TextInput, View } from "react-native";
import { Image } from 'react-native';
import auth from '@react-native-firebase/auth'
import { FirebaseError } from 'firebase/app'

import LoginButton from '@/components/common/buttons/CustomButton'
import { images } from '@/constants'
import styles from "@/styles/login.style";
import { router } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FIRESTORE_DB } from "@/firebaseConfig";
import useUserStore from "@/services/state/zustand/user-store";

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' })

  const { uid, updateUser } = useUserStore()

  const validateForm = () => {
    let errors = { email: '', password: '' };

    if (!email) errors.email = 'Email is required'
    if (!password) errors.password = 'Password is required'

    setErrors(errors);
    return !!!errors.email && !!!errors.password
  }

  const singUp = async () => {
    router.navigate("./register")
  }

  const singIn = async () => {
    setLoading(true)

    try {
      const isUserInFirestore = await validationFirestore()

      if (!validateForm() || !isUserInFirestore) {
        alert('Must be an error with your email')
        setLoading(false)
        return
      }
      await auth().signInWithEmailAndPassword(email, password)
    } catch (error: any) {
      const e = error as FirebaseError
      alert('Sign in failed: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  const validationFirestore = async () => {
    const userRef = collection(FIRESTORE_DB, 'users')
    const messagesCollectionRef = query(userRef, where("email", "==", email));
    const data = await getDocs(messagesCollectionRef);
    const exist = data.docs.filter(async (doc) => {
      if (doc.data().email === email) {
        updateUser({
          uid: doc.id,
          name: doc.data().name,
          lastname: doc.data().lastname,
          email: doc.data().email,
          contactNumber: doc.data().contactNumber,
          petsId: doc.data().petsId
        })
        return doc
      }
    })

    if (exist.length > 0) return true
    return false
  }


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={images.logoPet2} style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Login</Text>

          <TextInput
            style={styles.input}
            placeholder='Email'
            autoCapitalize='none'
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address" />
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}

          <TextInput
            secureTextEntry style={styles.input}
            placeholder='Password'
            autoCapitalize='none'
            onChangeText={(text) => setPassword(text)} />
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}

          {loading ? <ActivityIndicator size='large' color='#0000ff' /> :
            <>
              <View style={styles.containerButtons}>
                <LoginButton
                  handleOnPress={singIn}
                  title={'Sign In'}
                />
                <LoginButton
                  handleOnPress={singUp}
                  title={'Sign Up'}
                />
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>

              </View>
              <Image source={images.googleLogo} style={styles.logoGoogle}
                resizeMode="contain"
              />
            </>
          }
        </View>

      </KeyboardAvoidingView>
    </View>
  );
}

import { Stack, useRouter, useSegments } from "expo-router";
import { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import ScreeanHeader from '../components/common/header/ScreeanHeader';

export default function RootLayout() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
  const router = useRouter()
  const segments = useSegments()

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    console.log('onAuthStateChanged: ', user);
    setUser(user)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    return auth().onAuthStateChanged(onAuthStateChanged)
  }, []);

  useEffect(() => {
    if (initializing) return

    const inAuthGroup = segments[0] === '(auth)'
    if (user && !inAuthGroup) {
      router.replace('/(auth)/home')
    } else if (!user && inAuthGroup) {
      router.replace('/')
    }
  }, [user, initializing]);

  if (initializing) {
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    }}>
      <ActivityIndicator size="large"></ActivityIndicator>
    </View>
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}

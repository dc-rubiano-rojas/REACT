import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Detail from './app/screens/Detail';
import Login from './app/screens/Login';
import Home from './app/screens/Home';
import { icons, images } from './constants';
import { ScreenHeaderBtn } from './components';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { FIREBASE_AUTH } from './firebaseConfig';


const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={async () => await FIREBASE_AUTH.signOut()}
      />
    </DrawerContentScrollView>
  );
}

export function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName='Home' drawerContent={CustomDrawerContent} >
      <Drawer.Screen name="Home" component={Home} options={{
        title: 'My Pets',
        drawerLabel: 'My Pets',
        headerRight: () => (
          <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' handlePress={undefined} />
        ),
      }} />
      <Drawer.Screen name="Pet Register" component={Detail} />
      <Drawer.Screen name="Profile" component={Detail} />
    </Drawer.Navigator>
  );
}

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name='Home' component={MyDrawer} options={{ headerShown: false }} />
    </InsideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user)
    })
  }, [])


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>

        {user ? <Stack.Screen name="Inside" component={InsideLayout} options={{ headerShown: false }} />
          : <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        }

      </Stack.Navigator>
    </NavigationContainer>
  );
}

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from './app/screens/Detail';
import Login from './app/screens/Login';
import Register from './app/screens/Register';
import Home from './app/screens/Home';

const Stack = createNativeStackNavigator();
const insideStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

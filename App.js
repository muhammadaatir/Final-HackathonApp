import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import Login from './login';
import Signup from './signup';
import MainUser from './mainUser';
import MainAdmin from './mainAdmin';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Signup" component={Signup} />
        <Stack.Screen options={{headerShown: false}} name="MainUser" component={MainUser} />
        <Stack.Screen options={{headerShown: false}} name="MainAdmin" component={MainAdmin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

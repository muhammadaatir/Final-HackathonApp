import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import About from './src/components/adminHome';
import Cart from './src/components/cart';
import Account from './src/components/account';
import UserHome from './src/components/userHome';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({

});
export default function MainUser() {
  return (
      <Tab.Navigator>
        <Tab.Screen options={{headerShown: false}}  name="UserHome" component={UserHome} />
        <Tab.Screen options={{headerShown: false}}  name="Cart" component={Cart} />
        <Tab.Screen options={{headerShown: false}}  name="Account" component={Account} />
      </Tab.Navigator>
  );
}

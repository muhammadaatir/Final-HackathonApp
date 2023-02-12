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
import AdminHome from './src/components/adminHome';
import AddItems from './src/components/addItems';
import AdminAccount from './src/components/adminAccount';
import Orders from './src/components/orders';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({

});
export default function MainAdmin() {
  return (
      <Tab.Navigator>
        <Tab.Screen options={{headerShown: false}}  name="AdminHome" component={AdminHome} />
        <Tab.Screen options={{headerShown: false}}  name="AddItems" component={AddItems} />
        <Tab.Screen options={{headerShown: false}}  name="AdminAccount" component={AdminAccount} />
        <Tab.Screen options={{headerShown: false}}  name="Orders" component={Orders} />
      </Tab.Navigator>
  );
}

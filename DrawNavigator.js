import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import TabNavigator from './TabNavigator'

const Drawer = createBottomTabNavigator()
const DrawNavigator = ()=> {
  return(
    <Drawer.Navigator>
    <Drawer.Screen name = "Home" compenent = {Home}/>
    <Drawer.Screen name = "Tab" compenent = {TabNavigator}/>
    </Drawer.Navigator>
  )
} 
export default DrawNavigator 
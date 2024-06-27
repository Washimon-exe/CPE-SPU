import { StyleSheet, Text, View, Image, Button, VirtualizedList } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import home from './Screen/Home.js'
import booklist from './Screen/Booklist.js'
import bookfind from './Screen/Bookfind.js';

const Stack = createStackNavigator();

const About = () => {
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="home" component={home} options={{headerShown: false, tabBarVisible: false}}/>
          <Stack.Screen name="booklist" component={booklist} options={{headerShown: false, tabBarVisible: false}}/>
          <Stack.Screen name="bookfind" component={bookfind} options={{headerShown: false, tabBarVisible: false}}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  btn: {
    backgroundColor: '#F193FA',
    fontSize: 40,
    borderRadius: 50, // ตั้งค่าเป็นครึ่งของความยาวหรือความกว้างเพื่อทำให้โค้งมน
    width: 500,
    height: 100,
    color: 'white',
    borderColor: 'white'
  }
})

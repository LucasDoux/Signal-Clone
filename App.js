import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import { createStackNavigator } from "@react-navigation/stack" //Fornece uma maneira de seu aplicativo fazer a transição entre as telas, onde cada nova tela é colocada no topo de uma pilha.


const Stack = createStackNavigator(); 

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#1892e8"},
  headerTitleStyle: { color: "white"},
  headerTintColor:"white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name ="Letter Chat" component={LoginScreen}/>
        <Stack.Screen name ="Register" component={RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

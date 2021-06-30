import React from 'react';
import { useLayoutEffect } from 'react';
import { View ,Text,StyleSheet, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-elements'
import {AntDesign, SimpleLineIcons} from "@expo/vector-icons"

import CustomListItem from "../components/CustomListItem";

import { StatusBar } from 'expo-status-bar';
import {auth, db} from '../firebase';


// import { Container } from './styles';

const HomeScreen = ({navigation}) => {

    const signOutUser = () =>{
        auth.signOut().then(() => {
            navigation.replace('Login')
        })
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: {backgroundColor: "white"},
            headerTitleStyle: {color: "black"},
            headerTintColor: "black",
            headerLeft: () => (
                <View style={{marginLeft: 20}}>

                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>

                     <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }}></Avatar>
                    
                    </TouchableOpacity>
                </View>
            ),

            headerRight: () => (
                <View style= {{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    width:80,
                    marginRight:20,

                }}>

                     <TouchableOpacity activeOpacity={0.5}>

                         <AntDesign name='camerao' size={24} color="black"/>

                     </TouchableOpacity>


                     
                     <TouchableOpacity onPress={() => navigation.navigate('AddChat')} activeOpacity={0.5}>

                         <SimpleLineIcons name='pencil' size={24} color="black"/>

                     </TouchableOpacity>

                </View>
            )

        });
    }, [navigation]);

  return( 
  <SafeAreaView>
      <StatusBar/>

      <ScrollView>

          <CustomListItem/>
        
      </ScrollView>

  </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({

});
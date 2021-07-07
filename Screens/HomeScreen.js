import React, { useEffect, useState } from 'react';
import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements'
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons"

import CustomListItem from "../components/CustomListItem";

import { StatusBar } from 'expo-status-bar';
import { auth, db } from '../firebase';


// import { Container } from './styles';

const HomeScreen = ({ navigation }) => {

    const [chats, setChats] = useState([]);

    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace('Login')
        })
    }


    useEffect(() => {
        const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
            setChats(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );

        return unsubscribe

    }, []);



    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: "white" },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>

                    <TouchableOpacity >

                        <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }}></Avatar>

                    </TouchableOpacity>
                </View>
            ),

            headerRight: () => (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20,

                }}>

                     <TouchableOpacity onPress={() => navigation.navigate('AddChat')} activeOpacity={0.5}>

                        <SimpleLineIcons name='pencil' size={24} color="black" />

                    </TouchableOpacity>


                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>

                        <SimpleLineIcons name='logout' size={24} color="black" />

                    </TouchableOpacity>



                    



                </View>
            )

        });
    }, [navigation]);



    const enterChat = (id, chatName) => {
        navigation.navigate("Chat", {
            id,
            chatName,
        });
    };



    return (
        <SafeAreaView>
            <StatusBar />

            <ScrollView style={styles.container}>

                {chats.map(({id, data: {chatName}}) =>( 

                    <CustomListItem 
                    key={id} 
                    id={id} 
                    chatName={chatName} 
                    enterChat={enterChat}
                    />

                ))}


            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        height: "100%"
    }
});
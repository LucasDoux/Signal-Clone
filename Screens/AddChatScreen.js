import React, {useLayoutEffect, useState} from 'react';
import { StyleSheet,View, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome"
import { db } from '../firebase';

const AddChatScreen = ({navigation}) => {

    const[input,setInput] = useState("");

    useLayoutEffect(() =>{
        navigation.setOptions({
            title: "Add a new chat",
            headerBackTitle: "Chats"
        });
    }, [navigation])


    const createChat = async () => { //criação de um novo chat
        await db
        .collection("chats")
        .add({
            chatName: input,
        })
        .then(() => {
            navigation.goBack();
        })
        .catch((error) => alert(error));

    }

  return (
    <View style={styles.container}>

        <Input 
        placeholder="   Digite o nome do novo chat   "
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={
            <Icon name="wechat" type="antdesign" size={24} color="black" />
        }
        />

        <Button style={styles.button} onPress={createChat} title="Criar Chat"></Button>
        
    </View>
  ) ;
}

export default AddChatScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding:30,
        height:'100%'
    },

    button:{
        marginTop:15,
    },
})
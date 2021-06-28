import { styleSheets } from 'min-document';
import React, { useState } from 'react'
import { StyleSheet, StatusBar, Text, View, KeyboardAvoidingView } from 'react-native'; // KeyboardAvoidingView justar automaticamente sua altura, posição ou preenchimento inferior com base na altura do teclado.
import { Button, Input, Image } from 'react-native-elements';

const LoginScreen = () => {
    
    const [email,setEmail] = useState('');

    const [password,setPassword] = useState('');

    const SignIn = () => {

    }

    return (
        <KeyboardAvoidingView behavior='padding'  style={styles.container}>
            <StatusBar style="light" />

            <Image source={{

                uri:"https://img.icons8.com/fluent/452/signal-app.png",

            }}

            style={{width:200, height:200}}
             />

             <View style={styles.inputContainer}>

                 <Input 
                 placeholder="Email" 
                 autoFocus 
                 type="email" 
                 value={email}
                 onChangeText={(text) => setEmail(text)}/>

                 <Input 
                 placeholder="Password" 
                 secureTextEntry 
                 type="password"
                 value={password}
                 onChangeText={(text) => setPassword(text)}/>

            </View>

            <Button containerStyle={styles.button} onPress={SignIn} title='Login'/>
            <Button containerStyle={styles.button} type="outline" title='Register'/>
            <View style={{height:100}}/>

        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        backgroundColor:"white",
    },
    inputContainer:{
        width:300,
    },
    button:{
        width: 300,
        marginTop:10,
    },
});
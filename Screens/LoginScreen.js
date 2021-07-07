import { styleSheets } from 'min-document';
import React, { useState,useEffect } from 'react'
import { StyleSheet, StatusBar, Text, View, KeyboardAvoidingView } from 'react-native'; // KeyboardAvoidingView justar automaticamente sua altura, posição ou preenchimento inferior com base na altura do teclado.
import { Button, Input, Image } from 'react-native-elements';
import {auth} from "../firebase"

const LoginScreen = ({ navigation }) => {
    
    const [email,setEmail] = useState('');

    const [password,setPassword] = useState('');

    useEffect(() =>{
       const unsubscribe = auth.onAuthStateChanged((authUser) => {
           console.log(authUser)
            if(authUser){
                navigation.replace('Home');
            }
        });

        return unsubscribe;

    }, []);

    const SignIn = () => { //Const para logar na conta do usuario
        auth
        .signInWithEmailAndPassword(email,password)
        .catch(error => alert(error));

    };

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
                 placeholder="E-mail" 
                 autoFocus 
                 type="email" 
                 value={email}
                 onChangeText={(text) => setEmail(text)}/>

                 <Input 
                 placeholder="Senha" 
                 secureTextEntry 
                 type="password"
                 value={password}
                 onChangeText={(text) => setPassword(text)}
                 onSubmitEditing={SignIn}/>

            </View>

            <Button containerStyle={styles.button} onPress={SignIn} title='Acessar'/>
            
            <Button 
            onPress={() => navigation.navigate("Register")} 
            containerStyle={styles.button} 
            type="outline" 
            title='Register'
            />

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
        marginTop:15,
    },
});
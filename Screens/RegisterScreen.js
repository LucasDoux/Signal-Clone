import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(() => {

        navigation.setOptions({
            headerBackTitle: "Back to login", //POSSIVEL ERRO(NÃO APARECE NA TOPBAR O NOME DA TELA ANTERIOR PARA VOLTAR)
        });

    }, [navigation]);


    const register = () => {

    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />

            <Text h3 style={{ marginBottom: 50 }}>

                Criar Conta Signal

            </Text>

            <View style={(styles.InputContainer)}>

                <Input placeholder='Nome Completo'
                    autofocus
                    type='text'
                    value={name}
                    onChangeText={(text) => setName(text)} />

            </View>


            <View style={(styles.InputContainer)}>

                <Input placeholder='E-mail'
                    type='email'
                    value={email}
                    onChangeText={(text) => setEmail(text)} />

            </View>


            <View style={(styles.InputContainer)}>

                <Input placeholder='Senha'
                    secureTextEntry
                    type='password'
                    value={password}
                    onChangeText={(text) => setPassword(text)} />

            </View>


            <View style={(styles.InputContainer)}>

                <Input placeholder='Foto de perfil URL(opcional)'
                    type='text'
                    value={imageUrl}
                    onChangeText={(text) => setImageUrl(text)}
                    onSubmitEditing={register} />

            </View>

            <Button
                containerStyle={styles.button}
                raised
                onPress={register}
                title="Registrar"
            />

            <View style={{ height: 100 }} />

        </KeyboardAvoidingView>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "White",
    },

    InputContainer: {
        width:300,
    },

    button: {
        width: 300,
        marginTop: 15,
    }


})
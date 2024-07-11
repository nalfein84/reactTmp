import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { auth, Auth } from '../utils/api/auth';



const styles = StyleSheet.create ({
    
    inputField:{
        alignSelf: 'center',
        backgroundColor: "#fff", 
        borderColor: '#000', 
        borderWidth:1,
        width: 300
    }
});

function verifyCoherence({pass, password} : {pass :string, password: string}) {
    return (pass == password);
}

const nommeUneFonction = async ({login, pass} : {login :string, pass :string}) => {
    try {
        const data = '{"login": "'+login+'", "password": "'+pass+'"}';
        console.log("data sent:"+data);
        const prod = await auth.create(data);
        console.log(prod);
        return prod;
    } catch (error) {
        console.log(error);
    }
}

function confirmRegistration({login, pass, password} : {login :string, pass :string, password: string}){
    if(!verifyCoherence({pass, password})){
        console.log("Le mot de passe saisie ne correspond pas au mot de passe de confirmation")
        return false;
    }
    
    const result = nommeUneFonction({login, pass});
    if(auth.isAuth(result)){
        console.log("result is Auth");
        console.log(result);
    }else{
        console.log(result);
    }
    
}
//onPress={() => {if (confirmRegistration({login, pass, password})) navigation.navigate('Home');}}



export function SignUpPage({navigation}: {navigation: any}){
    
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    
    return (
        <View style={{flexDirection: "column"}}>
                    <View style={{height:100}}><Button title='Quit' onPress={() => {confirmRegistration({login, pass, password})}}></Button></View>
            <View style={{flex:1, marginHorizontal: 20,height:100, backgroundColor: "#000"}}>
                <Text /*title='Sign Up'*/ >test</Text>
            </View>
            <View style={{flex:1, marginHorizontal: 20,height:100, backgroundColor: "#000"}}>
                <View>
                    <View style={{height:20}}></View>
                    <TextInput style={styles.inputField} onChangeText={setLogin} accessibilityHint='Mail'></TextInput>
                    <View style={{height:20}}></View>
                    <TextInput style={styles.inputField} secureTextEntry={true} onChangeText={setPassword} accessibilityHint='Password'></TextInput>
                    <View style={{height:20}}></View>
                    <TextInput style={styles.inputField} secureTextEntry={true} onChangeText={setPass} accessibilityHint='Password'></TextInput>
                </View>
            </View>
            
        </View>
    );
}
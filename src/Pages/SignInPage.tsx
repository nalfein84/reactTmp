import React, { useEffect, useState } from 'react';
import { Button, Image, StyleSheet, TextInput, View } from 'react-native';
import { auth, Auth } from '../utils/api/auth';


const styles = StyleSheet.create ({
    
    inputField:{
        alignSelf: 'center',
        backgroundColor: "#fff", 
        borderColor: '#000', 
        borderWidth:1,
        width: 300
    },
    button:{
        backgroundColor: "#abcdef",
        borderColor: "#000", 
        borderWidth:1, 
        padding:8, 
        textAlign:'center', 
        //fontWeight:500, 
        color:"#000"
    }
    
});

export function SignInPage({navigation}: {navigation: any}) : React.ReactNode {
    const [AUTH, setAUTH] = useState<Auth[]>([]);
    useEffect(()=>{ ( async () => { const au = await auth.getAll().catch((err) => console.log(err)); if (au) setAUTH(au); console.log(au) })() },[]);
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [variable, setvariable] = useState<boolean>(true);

    const color = variable? "black" : "red";
    return (
        <View style={{flexDirection: 'column', backgroundColor: "#fedcba",borderColor: "#000", borderWidth:1, height:777}}>
            <View style={{flex:1}}></View>
            <View style={{flex:1, alignItems:'center', marginHorizontal: 10, height:400}}>
                <Image style={{backgroundColor: "#123456", borderRadius:90, borderColor: "#000", borderWidth:1, height:150, width:150}} src={"https://groupe-berto.atlassian.net/jira/dashboards/10017?maximized=10250"}/>
            </View>
            <View style={{flex:1}}></View>
            <View style={{flex:1, marginHorizontal: 20,height:100}}>
                <View>
                    <TextInput style={{...styles.inputField, borderColor: color}} onChangeText={setLogin} accessibilityHint='Mail'></TextInput>
                    <View style={{height:20}}></View>
                    <TextInput style={styles.inputField} secureTextEntry={true} onChangeText={setPassword} accessibilityHint='Password'></TextInput>
                </View>
            </View>
            <View style={{flex:1}}></View>
            <View style={{flex:1, flexDirection: 'row',  marginHorizontal: 10}}>
                <View style={{flex:1}}/>
                <View style={{flex:3}}>
                    <Button title='Sign Up' onPress={() => {navigation.navigate('SignUp');}}/>
                </View>
                <View style={{flex:2}}>
                </View>
                <View style={{flex:3}}>
                    <Button title='Sign In' onPress={() => {
                            console.log(AUTH.length);
                        for(let i = 0; i<AUTH.length; i++){
                            console.log(AUTH[i].login+" && "+AUTH[i].password);
                            console.log(login+" && "+password);
                            if(AUTH[i].login == login && AUTH[i].password == password)
                                navigation.navigate('Home');
                            else{
                                styles.inputField;
                                styles.inputField.borderWidth = 2;
                                setvariable(false);
                                navigation.navigate('SignIn');
                            } 
                        }
                    }}/>
                </View>
                <View style={{flex:1}}/>
            </View>
            <View style={{flex:1}}></View>
        </View>
    );
}
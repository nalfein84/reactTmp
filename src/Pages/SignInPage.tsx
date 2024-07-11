import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create ({
    button:{
        backgroundColor: "#abcdef",
        borderColor: "#000", 
        borderWidth:1, 
        padding:8, 
        textAlign:'center', 
        //fontWeight:500, 
        color:"#000"
    },
    inputField:{
        alignSelf: 'center',
        backgroundColor: "#fff", 
        borderColor: "#000", 
        borderWidth:1,
        width: 300
    }
});

export function SignInPage({navigation}: {navigation: any}) : React.ReactNode {
    return (
        <View style={{flexDirection: 'column', backgroundColor: "#fedcba",borderColor: "#000", borderWidth:1, height:777}}>
            <View style={{flex:1}}></View>
            <View style={{flex:1, alignItems:'center', marginHorizontal: 10, height:400}}>
                <Image style={{backgroundColor: "#123456", borderRadius:90, borderColor: "#000", borderWidth:1, height:150, width:150}} src={"https://groupe-berto.atlassian.net/jira/dashboards/10017?maximized=10250"}/>
            </View>
            <View style={{flex:1}}></View>
            <View style={{flex:1, marginHorizontal: 20,height:100}}>
                <View>
                    <TextInput style={styles.inputField}>Mail</TextInput>
                    <View style={{height:20}}></View>
                    <TextInput style={styles.inputField}>Password</TextInput>
                </View>
            </View>
            <View style={{flex:1}}></View>
            <View style={{flex:1, flexDirection: 'row',  marginHorizontal: 10}}>
                <View style={{flex:1}}/>
                <View style={{flex:3}}>
                    <Text style={styles.button}>Register</Text>
                </View>
                <View style={{flex:2}}>
                </View>
                <View style={{flex:3}}>
                    <Button title='Sign In' onPress={() => navigation.navigate('Home')}></Button>
                </View>
                <View style={{flex:1}}/>
            </View>
            <View style={{flex:1}}></View>
        </View>
    );
}


/*const auth: [
    {
      "id": 1,
      "login": "no.mail@nomail.com",
      "password": "N0Password!"
    }
  ]*/
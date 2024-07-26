import React from "react";
import { Image, TextInput, View } from "react-native";
import { Text } from "../../Atoms";
import { ETextType } from "../../Enum/Enum";

export interface IFormItem {
    type: string
    label: string
    value: string
    retour: Function
}

export function FormItem ({type, label, retour, value} : IFormItem) : React.ReactNode {

    let inputstyle = {
        paddingTop: 10,
        marginTop: 8,
        paddingBottom: 10,
        marginBottom: 8,
        marginHorizontal: 10,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000'
    }
    
    let row;
    switch(type){
        case "Img":
            row = <Image />;
            break;
        case "Text":
            row = <TextInput style={inputstyle} onChangeText={(value) => {retour(value)}} defaultValue={value}/>;
            break;
        case "SecureText":
            row = <TextInput style={inputstyle} onChangeText={(value) => {retour(value)}} defaultValue={value} secureTextEntry={true}/>;
            break;
        default:
            row = <TextInput style={inputstyle} />; 
            break;
    }

    return (
        <View>
            <Text children={label} type={ETextType.subTitle1} textStyle={{textAlign: 'center', paddingTop: 10}}/>
            {row}
        </View>
    );
}
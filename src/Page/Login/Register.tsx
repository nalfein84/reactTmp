import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { CreationTemplate } from "../../Template/Creation/Creation";
import { IFormItem } from "../../Molecules/FormItems/FormItem";
import { apiPost } from "../../Api/StandardApi";
import { EPublicScreen } from "../../Interfaces";

const verifyCoherence = (login: string, pass: string, confirm: string) : boolean => {
    console.log('{'+login+' - '+pass+' - ' + confirm +'}')
    if(login.length < 1) {
        console.error("Le login ne peut pas etre vide")
        return false;
    }
    if(pass.length < 8){
        console.error("Le mot de passe saisie doit faire plus de 8 caractere")
        return false;
    }
    if(pass != confirm){
        console.log("Le mot de passe saisie ne correspond pas au mot de passe de confirmation")
        return false;
    }
    return true;
}


export function Register({navigation}: {navigation: any}): React.ReactNode{
    // states
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [pass, setConfirmPass] = useState<string>("");
    const [validate, setValidate] = useState(false);

    //hooks
    useEffect(() => { 
        ( async () => {
            if(login != "" && password != ""){
                const auth = await apiPost('auth', {login: login, password: password}).catch((error) => console.error(error));
                if(auth) navigation.navigate(EPublicScreen.Login)
            }
        })()
    }, [validate])

    //methods
    const onChangeLogin = (value) => {setLogin(value)}
    const onChangePass = (value) => {setPassword(value)}
    const onChangeConfirmPass = (value) => {setConfirmPass(value)}
    const onRegister = () => {
        if(verifyCoherence(login, password, pass)){
            setValidate(!validate);
        }else{
            console.log('failed Register')
        }
    }

    //props
    let actions = [
        {label: "Register" , action : onRegister},
        {label: "Back" , action : () => {navigation.navigate(EPublicScreen.Login)}}
    ];
    let formData : IFormItem[] = [
        {
            type: 'Text',
            label: 'Login',
            value: "",
            retour: onChangeLogin
        },
        {
            type: 'SecureText',
            label: 'Password', 
            value: "",
            retour: onChangePass
        },
        {
            type: 'SecureText',
            label: 'Confirm Password', 
            value: "",
            retour: onChangeConfirmPass
        }
    ]

    
    return (
        <CreationTemplate label={"Register"} data={formData} actions={actions}/>
    );
}
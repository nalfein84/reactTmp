import { useDispatch } from "react-redux";
import { setToken } from "../../Redux/Reducers";
import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { apiGet } from "../../Api/StandardApi";
import { IFormItem } from "../../Molecules/FormItems/FormItem";
import { CreationTemplate } from "../../Template/Creation/Creation";
import { EPublicScreen } from "../../Interfaces";


export default function Login({navigation}: {navigation: any}) {
    const dispatch = useDispatch();
    const [userAuth, setAUTH] = useState({login: "", pass: ""});
    const [validate, setValidate] = useState(false);
    useEffect(()=>{ 
        ( async () => { 
            console.log(userAuth.login + ' - '+userAuth.pass);
            const au = await apiGet("auth").catch((err) => console.log(err)); 
            for(let i = 0; i<au.length; ++i) {
                if ((userAuth.login != "" && au[i]?.login === userAuth.login ) 
                    && (userAuth.pass != "" && au[i]?.password === userAuth.pass)) {
                    dispatch(setToken({
                        accessToken: "1",
                        refreshToken: "2",
                        user: null,
                    }))
                }
            }
        })() 
    },[validate]);

    const Login = () => {
        setValidate(!validate);
    }

    const Register = () => {
        navigation.navigate(EPublicScreen.Register);
    }

    const onChangePass = (value) => {
        setAUTH({...userAuth, pass: value});
    }

    const onChangeLogin = (value) => {
        setAUTH({...userAuth, login: value});
    }

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
        }
    ]

    //<Icon name="calendar" size={16} />
    return (
        <View>
            <CreationTemplate label={"Sign In"} data={formData} actions={[{label: "Login" , action : Login}, {label: "Register" , action : Register}]}/>
        </View>
    )
}
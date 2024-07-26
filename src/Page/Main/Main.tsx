import React from 'react';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { Main } from "../../Template";
import { IProduct } from "../../Interfaces";
import { Button } from '../../Atoms';
import { apiDelete, apiGet } from '../../Api/StandardApi';
import { View } from 'react-native';
import { EButtonType } from '../../Enum/Enum';
import { ScrollView } from 'react-native';
import { setToken } from '../../Redux/Reducers';



export function MainPage({navigation}: {navigation: any}): React.ReactNode {
    const [PRODUCTS, setProduct] = useState<IProduct[]>([]);
    const [validate, setValidate] = useState(false);
    const [DeletedId, setDeletedId] = useState("");
    const dispatch = useDispatch();
    useEffect(()=>{ ( async () => { 
        const prod = await apiGet("products").catch((err) => console.log("error :"+err)); 
        if (prod) 
        setProduct(prod); 
        console.log(prod) 
    })() },[validate]);

    useEffect(()=>{ ( async () => { 
        await apiDelete("products/"+DeletedId, {}).catch((err) => console.log("error :"+err)); 
        setValidate(!validate);
    })() },[DeletedId]);

    const onPress = () => {
        dispatch(setToken({
            accessToken: null,
            refreshToken: null,
            user: null,
        }))
    }

    const onTest = () => {
        setValidate(!validate);
    }

    const onDelete = (id: string) => {
        setDeletedId(id);
    }

    const onUpdate = (result : IProduct) => {
        navigation.navigate('Creation', result);
    }

    return (
        <ScrollView style={{marginBottom: 88}} >
            <View style={{flexDirection: 'row'}}>
                <Button type={EButtonType.primaryBtn} text="Log Out" onPress={onPress}></Button>
                <Button type={EButtonType.tertiaryBtn} text="reload" onPress={onTest}></Button> 
            </View>
            <Main PRODUCTS={PRODUCTS} deleteAction={onDelete} updateAction={onUpdate} />
        </ScrollView>
    )
}
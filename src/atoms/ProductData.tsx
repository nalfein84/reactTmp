import React, { PropsWithChildren } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Product } from '../utils/api/product';

const styles = StyleSheet.create({
    title: {
        fontWeight: '900',
        color: "#000000",
        flex:1
    },
    descriprion:{
        fontWeight: '400',
        color: "#404040",
        height: 50,
        flex:2
    },
    imgsize: {
        height: 80,
        width: 80,
        backgroundColor: '#123456'
    }
  });


export type IProduct = PropsWithChildren <{id:number, name: string, desc:string, imgUrl: string}>;

function ProductData ( {product} : {product : Product}) : React.ReactNode {
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{flex:1, marginTop: 8, marginLeft: 8, marginBottom: 8}}>
                <Image style={styles.imgsize} source={{uri: product.imgUrl}}/>
            </View>
            <View style={{flex:3, marginTop: 8, marginLeft: 8, flexDirection:'column'}}>
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.descriprion}>{product.desc}</Text>
            </View>
        </View>
    );
}

export default ProductData;
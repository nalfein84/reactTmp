import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    title: {
        fontWeight: '900',
        color: "#000000"
    },
    descriprion:{
        fontWeight: '400',
        color: "#404040",
        height: 50
    }
  });


export type IProduct = PropsWithChildren <{id:number, name: string, desc:string, imgUrl: string}>;

function ProductData ( {product} : {product : IProduct}) : React.ReactNode {
    return (
        <View style={{
            marginTop: 8,
            marginLeft: 8,
            flex:2}}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.descriprion}>{product.desc}</Text>
        </View>
    );
}

export default ProductData;
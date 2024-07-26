import React from "react";
import { Image, View } from 'react-native';
import { BorderRadius, FontSize, Flex, Height, MarginTop, Width } from '../../Assets';
import { IProduct } from "../../Interfaces";
import { Button, Text } from '../../Atoms/index';
import { EButtonType } from '../../Enum/Enum';



function MoleculeProduct ({productItem, deleteAction, updateAction} : {productItem : IProduct, deleteAction: Function, updateAction:Function}) : React.ReactNode {
    let addbtnstyle = {
        borderRadius: 90,
        alignSelf: 'center',
    }

    let title = {
        ...Flex.flex1,
        ...FontSize.ftSz10,
    }

    let other = {
        ...Flex.flex1,
        ...MarginTop
    }
    let style = {
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: "#fedcba",
        height: 100
    }

    return (
        <View style={{...style, ...Flex.row}}>
            <View style={{...other}}>
                <Image style={{...Height.full, ...Width.full}} source={{uri: productItem.imgUrl}}/>
            </View>
            <View style={{...other, ...Flex.col}}>
                <Text style={{...title, marginTop:10, fontSize:12, fontWeight: 600}} >{productItem.name}</Text>
                <Text style={{...title, fontSize:12, fontWeight: 600}}>{productItem.desc}</Text>
            </View>
            <View style={{...other}}>
                <Button type={EButtonType.tertiaryBtn} text="delete" btnStyle={{...addbtnstyle, width: 40, height: 40}} onPress={() => {deleteAction(productItem.id)}}/>
                <Button type={EButtonType.tertiaryBtn} text="update" btnStyle={{...addbtnstyle, width: 40, height: 40}} onPress={() => {console.log(productItem);updateAction(productItem)}}/>
            </View>
        </View>
    );
}

export default MoleculeProduct ;
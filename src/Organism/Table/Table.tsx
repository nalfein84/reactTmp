import React from 'react';
import { Text, View } from 'react-native';
import { IProduct } from "../../Interfaces";
import { Product } from '../../Molecules';



const ProductTable = ({products, deleteAction, updateAction}: {products : IProduct[], deleteAction: Function, updateAction:Function}) => {
    const rows: React.ReactNode[] = [];
    if(products.length === 0){
        return (
            <View>
                <Text> Il semblerai que nous aillons un probleme. Merci de patienter ou de ressayer plus tard</Text>
            </View> 
        );
    }else {
        
        for (let i = 0; i < products.length; i++)
        rows.push(<Product productItem={products[i]} deleteAction={deleteAction} updateAction={updateAction}/>);

    
        return (
            <View>
                {rows}
            </View> 
        );
    }
}

export default ProductTable;
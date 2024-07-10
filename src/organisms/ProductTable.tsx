import React from 'react';
import ProductRow from '../molecules/ProductRow';
import { Text, View } from 'react-native';
import { Product } from '../utils/api/product';



function ProductTable ({products}: {products : Product[]}) : React.ReactNode {
    const rows: React.ReactNode[] = [];
    if(products.length === 0){
        return (
            <View>
                <Text> Il semblerai que nous aillons un probleme. Merci de patienter ou de ressayer plus tard</Text>
            </View> 
        );
    }else {
        
        for (let i = 0; i < products.length; i++)
        rows.push(<ProductRow productItem={products[i]} />);

    
        return (
            <View>
                {rows}
            </View> 
        );
    }
}

export default ProductTable;
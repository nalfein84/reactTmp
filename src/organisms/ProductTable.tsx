import React from 'react';
import ProductRow from '../molecules/ProductRow';
import { IProduct } from '../atoms/ProductData';
import { View } from 'react-native';



function ProductTable ({products}: {products : IProduct[]}) : React.ReactNode {
    const rows: React.ReactNode[] = [];

    products.forEach((productItem : IProduct) => {
        rows.push(<ProductRow productItem={productItem} />);
    });


    return (
        <View>
            {rows}
        </View> 
    );
}

export default ProductTable;
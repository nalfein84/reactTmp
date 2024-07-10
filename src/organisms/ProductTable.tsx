import React from 'react';
import ProductRow from '../molecules/ProductRow';
import { IProduct } from '../atoms/ProductData';
import { View } from 'react-native';
import { Product } from '../utils/api/product';



function ProductTable ({products}: {products : Product[]}) : React.ReactNode {
    const rows: React.ReactNode[] = [];

    products.forEach((productItem : Product) => {
        rows.push(<ProductRow productItem={productItem} />);
    });


    return (
        <View>
            {rows}
        </View> 
    );
}

export default ProductTable;
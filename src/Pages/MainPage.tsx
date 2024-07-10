import React from 'react';
import ProductTable from '../organisms/ProductTable';
import { View } from 'react-native';
import { IProduct } from '../atoms/ProductData';
import { SearchBar } from '../molecules/SearchBar';
import { product, Product } from '../utils/api/product';

let PRODUCTS : Product[];

function setProduct(p: Product[]) {
    PRODUCTS = p
}

export function MainPage() : React.ReactNode {
    product.getAll()
           .then((PRODUCTS : Product[]) => {setProduct(PRODUCTS); });

    return (
        <View>
            <SearchBar />
            <ProductTable products={PRODUCTS} />
        </View>
    );
    
}


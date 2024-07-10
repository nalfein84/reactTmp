import React, { useEffect, useState } from 'react';
import ProductTable from '../organisms/ProductTable';
import { View } from 'react-native';
import { SearchBar } from '../molecules/SearchBar';
import { product, Product } from '../utils/api/product';

export function MainPage() : React.ReactNode {
    
    const [PRODUCTS, setProduct] = useState<Product[]>([]);
    useEffect(()=>{ ( async () => { const prod = await product.getAll(); setProduct(prod) })() },[]);
    return (
        <View>
            <SearchBar />
            <ProductTable products={PRODUCTS} />
        </View>
    );

    
    
}


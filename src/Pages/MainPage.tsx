import React, { useEffect, useState } from 'react';
import ProductTable from '../organisms/ProductTable';
import { Button, View } from 'react-native';
import { SearchBar } from '../molecules/SearchBar';
import { product, Product } from '../utils/api/product';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


export function MainPage({navigation}: {navigation: any}): React.ReactNode {
    
    const [PRODUCTS, setProduct] = useState<Product[]>([]);
    useEffect(()=>{ ( async () => { const prod = await product.getAll(); setProduct(prod) })() },[]);
    return (
        <View>
            <Button title='Quit' onPress={() => navigation.navigate('SignIn')}></Button>
            <SearchBar />
            <ProductTable products={PRODUCTS} />
        </View>
    );

    
    
}


import React, { useEffect, useState } from 'react';
import ProductTable from '../organisms/ProductTable';
import { Button, View } from 'react-native';
import { SearchBar } from '../molecules/SearchBar';
import { product, Product } from '../utils/api/product';


export function MainPage({navigation}: {navigation: any}): React.ReactNode {
    
    const [PRODUCTS, setProduct] = useState<Product[]>([]);
    useEffect(()=>{ ( async () => { const prod = await product.getAll().catch((err) => console.log(err)); if (prod) setProduct(prod); console.log(prod) })() },[]);
    return (
        <View>
            <Button title='Quit' onPress={() => navigation.navigate('SignIn')}></Button>
            <SearchBar />
            <ProductTable products={PRODUCTS} />
        </View>
    );
    
}


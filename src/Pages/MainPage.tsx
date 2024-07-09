import React from 'react';
import ProductTable from '../organisms/ProductTable';
import { View } from 'react-native';
import { IProduct } from '../atoms/ProductData';
import { SearchBar } from '../molecules/SearchBar';

export function MainPage() : React.ReactNode {
    return (
        <View>
            <SearchBar />
            <ProductTable products={PRODUCTS} />
        </View>
    );
}


const PRODUCTS: IProduct[] =  [
    {desc: "Fruits", imgUrl: "$1", id: 1, name: "Apple"},
    {desc: "Fruits", imgUrl: "$1", id: 2, name: "Dragonfruit"},
    {desc: "Fruits", imgUrl: "$2", id: 3, name: "Passionfruit"},
    {desc: "Vegetables", imgUrl: "$2", id: 4, name: "Spinach"},
    {desc: "Vegetables", imgUrl: "$4", id: 5, name: "Pumpkin"},
    {desc: "Vegetables", imgUrl: "$1", id: 6, name: "Peas"}
  ]
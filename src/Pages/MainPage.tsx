import React from 'react';
import ProductTable from '../organisms/ProductTable';
import { View } from 'react-native';
import { IProduct } from '../atoms/ProductData';

export function MainPage() : React.ReactNode {
    return (
        <View>
            <ProductTable products={PRODUCTS} />
        </View>
    );
}

const PRODUCTS: IProduct[] =  [
  {
    "id":1,
    "imgUrl": "../../images/lettuce.jpg",
    "name": "Lettuce",
    "desc": "description lettuce"
  },
  {
    "id":2,
    "imgUrl": "images/carrot.jpg",
    "name": "Carrot",
    "desc": "description carrot"
  }
]
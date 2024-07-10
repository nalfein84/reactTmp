import React from 'react';
import ProductData from '../atoms/ProductData';
import { Image, StyleSheet, View } from 'react-native';
import { IProduct } from '../atoms/ProductData';
import { Product } from '../utils/api/product';

const styles = StyleSheet.create({
    sectionContainer: {
      borderWidth: 1,
      borderColor: "#000",
      backgroundColor: "#fedcba",
    }
  });

function ProductRow ({productItem} : {productItem : Product}) : React.ReactNode {
    return (
        <View style={styles.sectionContainer} >
            <ProductData key={productItem.id} product={productItem}/>
        </View>
    );
}

export default ProductRow;
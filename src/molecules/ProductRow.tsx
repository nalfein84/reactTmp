import React from 'react';
import ProductData from '../atoms/ProductData';
import { Image, StyleSheet, View } from 'react-native';
import { IProduct } from '../atoms/ProductData';

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 10,
      paddingHorizontal: 12,
      backgroundColor: "#fedcba",
      flexDirection: 'row'
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
    },
    highlight: {
      fontWeight: '700',
    },
    imgsize: {
        height: 50,
        width: 50,
        flex:1,
        backgroundColor: '#123456'
    },
  });

function ProductRow ({productItem} : {productItem : IProduct}) : React.ReactNode {
    return (
        <View style={styles.sectionContainer} >
            <Image style={styles.imgsize} source={{uri: productItem.imgUrl}}/>
            <ProductData key={productItem.id} product={productItem}/>
        </View>
    );
}

export default ProductRow;
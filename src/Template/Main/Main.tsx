import React from 'react';
import { Table } from '../../Organism/index';
import { Button, View } from 'react-native';
import { IProduct } from "../../Interfaces";


export function MainPage({PRODUCTS, deleteAction, updateAction}: {PRODUCTS: IProduct[], deleteAction:Function, updateAction:Function}): React.ReactNode {
    
    return (
        <View>
            <Table products={PRODUCTS} deleteAction={deleteAction} updateAction={updateAction} />
        </View>
    );
    
}


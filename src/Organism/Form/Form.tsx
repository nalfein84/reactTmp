import React from "react";
import { View } from "react-native";
import { FormItem, IFormItem } from "../../Molecules/FormItems/FormItem";

export function Form({data, style} : {data : IFormItem[], style?}): React.ReactNode {
    const rows: React.ReactNode[] = [];
    for(let i=0; i< data.length; i++){
        rows.push(<FormItem key={data[i].type+data[i].label} type={data[i].type} label={data[i].label} retour={data[i].retour} value={data[i].value}/>);
    }
    return (
        <View style={{...style}}>
            {rows}
        </View>
    );
}
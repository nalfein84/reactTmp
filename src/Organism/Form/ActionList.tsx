import React from "react";
import { View } from "react-native";
import { EButtonType } from "../../Enum/Enum";
import { Button } from "../../Atoms";

export function ActionList({actions} : {actions : {label: string, action: Function}[]}): React.ReactNode {
    
    let addbtnstyle = {
        borderRadius: 90,
        flex: 1,
        marginLeft: 10,
        marginRight: 10
    }

    const rows: React.ReactNode[] = [];
    for(let i=0; i< actions.length; i++){
        rows.push(<Button key={actions[i].label} type={EButtonType.primaryBtn} text={actions[i].label} btnStyle={{...addbtnstyle}} onPress={() => {actions[i].action()}}/>);
    }
    
    return(
        <View style={{flexDirection: 'row'}}>
            {rows}
        </View>
    )
}
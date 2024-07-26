import React from "react";
import { View } from "react-native";
import { Text } from "../../Atoms";
import { ETextType } from "../../Enum/Enum";
import { Form } from "../../Organism/Form/Form";
import { IFormItem } from "../../Molecules/FormItems/FormItem";
import { ActionList } from "../../Organism/Form/ActionList";


export function CreationTemplate ({label, data, actions}: {label : string, data: IFormItem[], actions: {label: string, action: Function}[]}): React.ReactNode {    
    return (
        <View style={{}}>
            <Text children={label} type={ETextType.title1} textStyle={{textAlign: 'center'}}/>
            <Form data={data}/>
            <ActionList actions={actions} />
        </View>
    );
} 
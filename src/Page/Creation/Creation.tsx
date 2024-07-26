import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { CreationTemplate } from '../../Template/Creation/Creation';
import { IFormItem } from '../../Molecules/FormItems/FormItem';
import { apiPost, apiPut } from '../../Api/StandardApi';

export function CreationPage({route, navigation}): React.ReactNode {
    const [prod, setProd] = useState("");
    const [desc, setDesc] = useState("");
    const [validate, setValidate] = useState(false);

    const result = route.params; 
    let imgUrl = 'calendar';
    let defaultProd = prod;
    let defaultDesc = desc;
    if(typeof(result) !== 'undefined'){
        console.log('creation Page => ');
        console.log(result);
        console.log(result.name);
        defaultProd = result.name;
        defaultDesc = result.desc;
        imgUrl = result.imgUrl;
    }


    useEffect(()=>{ 
        ( async () => { 
            console.log(prod + ' - '+desc);
            if ((prod != "" && desc != "" )) {
                if(typeof(result) !== 'undefined' && result.id != ""){
                    const au = await apiPut("products/"+result.id, {...result, name: prod, desc: desc}).catch((err) => console.log(err)); 
                }else{
                    const au = await apiPost("products", {name:prod, desc:desc, imgUrl: 'calendar'}).catch((err) => console.log(err)); 
                }
                navigation.navigate('Main');
            }
        })() 
    },[validate]);

    function setValueProd(value: string){
        setProd(value);
    }

    function setValueDesc(value : string){
        setDesc(value);
    }

    let formData : IFormItem[] = [
        {
            type: 'Text',
            label: 'Product Name',
            value: defaultProd,
            retour: setValueProd
        },
        {
            type: 'Text',
            label: 'Description', 
            value: defaultDesc,
            retour: setValueDesc
        }
    ]

    function onAdd() {
        if ((prod == ""))
            setValueProd(defaultProd);
        if(desc == "")
            setValueDesc(defaultDesc);
        setValidate(!validate);
    }

    console.log(formData)
    return (
        <View>
            <CreationTemplate label={"New Product"} data={formData} actions={[{label: "Save" , action : onAdd}]}/>
        </View>
    );
}
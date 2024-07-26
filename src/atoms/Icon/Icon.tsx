import selectionConfig from '../../Assets/Icomoon/selection.json';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { DEFAULTICONPROPS } from '../../DefaultProps';
import React from 'react';
import { IIcon } from '../../Interfaces';
const Icomoon = createIconSetFromIcoMoon(selectionConfig);
export default function Icon(props: IIcon) {
    return (
        <Icomoon
            onPress={props.onPress}
            name={props.name}
            size={props.size}
            color={props.color}
            style={props.style}
        />
    )
}
Icon.defaultProps = {
    ...DEFAULTICONPROPS,
}
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { publicRoutes } from '../../Data/Data';
import { EPublicScreen } from '../../Interfaces';

const PublicStack = createNativeStackNavigator()
export const PublicNavigation = () => {
    return (
        <PublicStack.Navigator initialRouteName={EPublicScreen.Login}>
            {
                
                publicRoutes?.map((item, index) => (
                    <PublicStack.Screen
                        name={item.name}
                        key={index}
                        component={item?.component}
                        options={{ header: item?.header }}
                        initialParams={item?.initialParams}
                    />
                ))
            }

        </PublicStack.Navigator>
    )
}

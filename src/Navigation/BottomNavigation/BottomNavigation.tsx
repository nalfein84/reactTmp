import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../../Providers/ThemeProvider/ThemeProvider';
import { BG, BorderColor, BottomNavigationStyle } from '../../Assets';
import { useDispatch } from 'react-redux';
import { setIsBottomNavigation } from '../../Redux/Reducers';
import { Icon, Text } from '../../Atoms';
import { tabArray } from '../../Data/Data';
import { EPrivateScreen, EPublicScreen } from '../../Interfaces';
const Tab = createBottomTabNavigator();
export default function BottomNavigation() {
    const theme = useContext(ThemeContext)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setIsBottomNavigation({ isBottomNavigation: true }))
        return () => {
            dispatch(setIsBottomNavigation({ isBottomNavigation: false }))
        }
    }, [])
    const returnColor = (focused: boolean, isIcon?: boolean): string => {
        if (focused) {
            return theme.commonBlack
        }
        return theme.commonBlack
    }
    
    return (
        <Tab.Navigator initialRouteName={EPrivateScreen.Main}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    ...BottomNavigationStyle.bottomNavigationStyle,
                    ...BorderColor(theme).primary,
                    ...BG(theme).primary,
                },
            }}
        >
            {
                tabArray?.map((item: any, index: number) => (
                    <Tab.Screen 
                        name={item?.name}
                        key={index}
                        component={item?.component}
                        options={{
                            tabBarLabel: ({ focused }) => (
                                <Text style={{ color: returnColor(focused) }}>
                                    {item?.label}
                                </Text>
                            ),
                            tabBarIcon: ({ focused }) => (
                                item.icon ?
                                    <Icon onPress={() => { }} name={item?.icon} size={24} color={focused ? theme.chasingPurple : theme.grisPomelo} /> : <></>
                            ),
                            //tabBarButton: item?.name
                        }}
                    />
                ))
            }
        </Tab.Navigator>
    )
}

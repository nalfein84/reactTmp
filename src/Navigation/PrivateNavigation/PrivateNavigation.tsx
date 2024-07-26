import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { privateRoutes } from '../../Data/Data';
import { EPrivateScreen } from '../../Interfaces';
export const PrivateNavigation = () => {
    const [loading, setLoading] = React.useState(false)
    const [defaultScreen, setDefaultScreen] = React.useState<string>("")
    const MainStack = createNativeStackNavigator()

    const horizontalAnimation = {
        cardStyleInterpolator: ({ current, layouts }: any) => {
            return {
                cardStyle: {
                    transform: [
                        {
                            translateX: current.progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [layouts.screen.width, 0],
                            }),
                        },
                    ],
                },
            };
        },
    };
    if (loading) return <></>
    
    console.log('tetst');
    return (
        <MainStack.Navigator
            initialRouteName={EPrivateScreen.Bottom}
            screenOptions={{ animation: 'slide_from_right', animationTypeForReplace: "pop" }}
        >
            {privateRoutes?.map((item, index) => (
                <MainStack.Screen
                    key={index}
                    name={item?.name}
                    component={item?.component}
                    options={{
                        header: item?.header,
                        ...horizontalAnimation
                    }}
                    initialParams={item?.initialParams}

                />
            ))}
        </MainStack.Navigator>
    )
}

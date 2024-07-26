import { useEffect } from 'react';
import { BackHandler } from 'react-native';

const useBackButtonHandler = (handleBackButton: any) => {
    useEffect(() => {
        const backAction = () => {
            handleBackButton()
            return true;
        };
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );
        return () => backHandler.remove();
    }, [handleBackButton]);
};

export default useBackButtonHandler;

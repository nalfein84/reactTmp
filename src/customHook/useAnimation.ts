import React from 'react'
const useAnimation = (navigation: any) => {
    const updateOptions = () => {
        navigation.setOptions({
            animation: 'slide_from_left',
        });
    };
    React.useEffect(() => {
        updateOptions();
        return () => {
            navigation.setOptions({
                animation: 'slide_from_right',
            });
        };
    }, [navigation]);
}
export default useAnimation
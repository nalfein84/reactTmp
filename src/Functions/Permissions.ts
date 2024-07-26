import { PermissionsAndroid, Platform } from "react-native";
import * as Permissions from 'react-native-permissions';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import Geolocation from 'react-native-geolocation-service';

export const requestLocationPermission = (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = Platform.OS === 'ios' ? await Geolocation.requestAuthorization('whenInUse') :
                await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                );
            if (result === Permissions.RESULTS.GRANTED) {
                if (Platform.OS === "android") {
                    await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
                        interval: 10000,
                        fastInterval: 5000,
                    })
                }
                Geolocation.getCurrentPosition(
                    (position) => {
                        resolve(position.coords);
                    },
                    (error) => {
                        reject(error);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
                );
            } else {
                reject(new Error('Location permission denied'));
            }
        } catch (error) {
            reject(error);
        }
    });
};
export const requestCameraPermission = async () => {
    try {
        Permissions.request(Platform.OS === 'ios' ? Permissions.PERMISSIONS.IOS.CAMERA : Permissions.PERMISSIONS.ANDROID.CAMERA).then((result) => {
        });
    } catch (error) {
        // Handle permission request error
    }
};
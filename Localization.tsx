import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform, NativeModules } from 'react-native';

const Path = "./constants/AllPath";


export const setLanguage = async (lName: string) => {
    await AsyncStorage.setItem('language', lName);
}

export const getLanguage = async () => {

    try {
        let AllPath = require(Path).default().Paths;
        const v = await AsyncStorage.getItem('language');
        if (v === null) {
            let userDefault = getUserDefaultLanguage()
            if (AllPath[userDefault] !== undefined) {
                return AllPath[userDefault];
            } else {
                return AllPath['en'];
            }
        }
        return AllPath[v];
    } catch (err) {
        console.log(err)
    }
}

export const getUserDefaultLanguage = () => {
    return Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale
        : NativeModules.I18nManager.localeIdentifier
}

declare global {
    interface String {
        getLocalisedString(): Promise<string>;
    }
}

String.prototype.getLocalisedString = async function (this: string): Promise<string> {
    try {
        const langObj = await getLanguage();
        let key: string = this;
        return langObj[key];
    } catch (err) {
        console.log("error: ", err);
        return "error while implementing getLanguage()";
    }

}

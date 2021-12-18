import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform, NativeModules, I18nManager } from 'react-native';
import { myRestart } from './Restart';
// import RNRestart from 'react-native-restart';

const Path = "./constants/AllPath";

let direction = {
    start: "left",
    end: "right"
};

export const isRTL = async () => {
    return (await "RTL".getLocalisedString());
}

export const myDirection = () => {
    if (I18nManager.isRTL) {
        return { start: "right", end: "left" }
    }
    return { start: "left", end: "right" }
}

export const setLanguage = async (lName: string) => {

    await AsyncStorage.setItem('language', lName);

    if (await isRTL()) {
        I18nManager.forceRTL(true);
        direction.start = "right";
        direction.end = "left;"
    }
    else {
        I18nManager.forceRTL(false);
        direction.start = "left";
        direction.end = "right;"
    }
    // if(RNRestart)
    // RNRestart.Restart();

    myRestart(); // this method is different for expo and vanilla
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
        return "error while implementing getLanguage";
    }
}

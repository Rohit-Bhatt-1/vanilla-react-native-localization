import RNRestart from 'react-native-restart';

export const myRestart = () => {
     if(RNRestart)
    RNRestart.Restart();
}
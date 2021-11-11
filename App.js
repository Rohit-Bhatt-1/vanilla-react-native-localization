import React, {useState, useEffect} from 'react';
import RNRestart from 'react-native-restart';

import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import MyImage from './tags/MyImage';
import MyText from './tags/MyText';
import MyTextInput from './tags/MyTextInput';
import {setLanguage, getLanguage, myDirection} from './vanillaLocalization';

export default function App() {
  const [lang, setLang] = useState(getLanguage());
  const [check, setCheck] = useState(false);
  useEffect(() => {
    async function getData() {
      const t = await getLanguage();
      setLang(t);
      setCheck(true);
    }
    getData();
  }, []);

  const pressHandler = async vaani => {
    await setLanguage(vaani);
    const t = await getLanguage();
    setLang(t);
  };
  if (!check) {
    return (
      <View>
        <Text>Ruko zara, Sabr rakho</Text>
      </View>
    );
  }

  const aler = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <View style={styles.out}>
      <View>
        <MyText>This is inside MyText!!</MyText>
        <MyText onPress={aler}>{lang.text}</MyText>
        <MyTextInput placeholder={lang.placeholder} style={styles.inp} />
        <MyImage
          source={require('./constants/Assets/RTL/finger-point.png')}
          style={styles.fingerPoint}
        />
      </View>
      <View style={styles.in}>
        <MyText>{lang.gyaan} jk</MyText>
        <Button
          onPress={() => pressHandler('en')}
          title="English"
          color="#841584"
        />
        <Button
          onPress={() => pressHandler('jpn')}
          title="Japanese"
          color="#841342"
        />
        <MyText>{lang.description}</MyText>
      </View>
    </View>
  );
}

console.log('direction', myDirection());
const styles = StyleSheet.create({
  out: {
    margin: 20,
    flex: 1,
  },
  in: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inp: {
    borderTopWidth: 2,
    borderLeftWidth: 1,
  },
  fingerPoint: {
    width: 50,
    height: 50,
  },
});

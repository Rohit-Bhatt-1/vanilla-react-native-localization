import React, {useState, useEffect} from 'react';

import {StyleSheet, Text, View, Button} from 'react-native';
import {setLanguage, getLanguage} from './vanillaLocalization';

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
  if (!check)
    return (
      <View>
        <Text>Ruko zara, Sabr rakho</Text>
      </View>
    );
  return (
    <View style={styles.out}>
      <Text style={styles.txt}>check this out</Text>
      <View style={styles.in}>
        {/* <Sasta /> */}
        <Text>{lang.gyaan} jk</Text>
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
        <Text>{lang.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  out: {
    flex: 1,
  },
  in: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    textAlign: 'left',
  },
});

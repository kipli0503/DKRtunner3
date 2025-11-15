import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useI18n } from '../i18n/i18n';

export default function HomeScreen({ navigation }) {
  const { t } = useI18n();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('app_title')}</Text>
      <Button title={t('monitor')} onPress={()=>navigation.navigate('Monitor')} />
      <Button title={t('mapping')} onPress={()=>navigation.navigate('Mapping')} />
      <Button title={t('flashing')} onPress={()=>navigation.navigate('Flashing')} />
      <Button title={t('bluetooth')} onPress={()=>navigation.navigate('Bluetooth')} />
      <Button title={t('settings')} onPress={()=>navigation.navigate('Settings')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:20,justifyContent:'center'},
  title:{fontSize:24,textAlign:'center',marginBottom:20}
});

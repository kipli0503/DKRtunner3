import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useI18n } from '../i18n/i18n';

export default function SettingsScreen() {
  const { setLocale } = useI18n();

  return (
    <View style={styles.container}>
      <Button title="Bahasa Indonesia" onPress={()=>setLocale('id')} />
      <Button title="English" onPress={()=>setLocale('en')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:20}
});

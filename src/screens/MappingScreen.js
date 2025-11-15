import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useI18n } from '../i18n/i18n';

export default function MappingScreen() {
  const { t } = useI18n();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('mapping_title')}</Text>
      <Text>Mapping editor placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:20},
  title:{fontSize:20,marginBottom:10}
});

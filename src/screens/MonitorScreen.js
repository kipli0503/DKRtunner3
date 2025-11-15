import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ecuService from '../services/ecuService';
import { useI18n } from '../i18n/i18n';

export default function MonitorScreen() {
  const { t } = useI18n();
  const [rpm, setRpm] = useState(0);
  const [tps, setTps] = useState(0);
  const [afr, setAfr] = useState(0);

  useEffect(()=>{
    const id = setInterval(()=>{
      const data = ecuService.getSimData();
      setRpm(data.rpm);
      setTps(data.tps);
      setAfr(data.afr);
    }, 1000);
    return ()=>clearInterval(id);
  },[]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('monitor_title')}</Text>
      <Text>RPM: {rpm}</Text>
      <Text>TPS: {tps}%</Text>
      <Text>AFR: {afr}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:20},
  title:{fontSize:20,marginBottom:10}
});

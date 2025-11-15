import React, {useState} from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { useI18n } from '../i18n/i18n';

export default function BluetoothScreen() {
  const { t } = useI18n();
  const [devices, setDevices] = useState([]);

  function scan(){
    setDevices(['ECU_Juken5', 'Daytona_Adapter', 'OBDII_BT']);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('bt_title')}</Text>
      <Button title="Scan Bluetooth" onPress={scan} />

      <ScrollView style={{marginTop:10}}>
        {devices.map((d,i)=>(
          <View key={i} style={styles.dev}>
            <Text>{d}</Text>
            <Button title="Connect" onPress={()=>alert('Simulated connect: '+d)} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:20},
  title:{fontSize:20,marginBottom:10},
  dev:{flexDirection:'row',justifyContent:'space-between',marginBottom:8}
});

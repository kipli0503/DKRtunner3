import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useI18n } from '../src/i18n';

export default function SettingsScreen({ navigation }) {
  const { t, setLocale } = useI18n();
  return (
    <View style={{flex:1,padding:16}}>
      <Text style={{fontSize:20,fontWeight:'700'}}>{t('settings_title')}</Text>

      <TouchableOpacity onPress={()=>setLocale('id')} style={{padding:12,backgroundColor:'#0ea5a4',borderRadius:8,marginTop:12}}>
        <Text style={{color:'#fff',textAlign:'center'}}>Bahasa Indonesia</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setLocale('en')} style={{padding:12,backgroundColor:'#3b82f6',borderRadius:8,marginTop:12}}>
        <Text style={{color:'#fff',textAlign:'center'}}>English</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.goBack()} style={{padding:12,backgroundColor:'#374151',borderRadius:8,marginTop:20}}>
        <Text style={{color:'#fff',textAlign:'center'}}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

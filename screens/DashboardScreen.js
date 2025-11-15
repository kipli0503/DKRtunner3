import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useI18n } from '../src/i18n';

const screenW = Dimensions.get("window").width - 32;

export default function DashboardScreen({ navigation }) {
  const { t } = useI18n();
  const [rpmData, setRpmData] = useState([1200, 1300, 1400, 1500, 1600]);
  const [afrData, setAfrData] = useState([14.0,13.8,13.5,13.9,14.1]);
  useEffect(()=>{
    const id = setInterval(()=>{
      setRpmData(d=>{
        const next = [...d.slice(-4), Math.floor(1000 + Math.random()*12000)];
        return next;
      });
      setAfrData(d=>{
        const next = [...d.slice(-4), +(10 + Math.random()*8).toFixed(1)];
        return next;
      });
    },1000);
    return ()=>clearInterval(id);
  },[]);

  return (
    <ScrollView contentContainerStyle={{ padding:16 }}>
      <Text style={{fontSize:24,fontWeight:'bold',marginBottom:12}}>{t('app_title')}</Text>

      <View style={{backgroundColor:'#111',padding:12,borderRadius:8,marginBottom:12}}>
        <Text style={{color:'#fff'}}>RPM</Text>
        <Text style={{color:'#fff',fontSize:20,fontWeight:'700'}}>{rpmData[rpmData.length-1]}</Text>
      </View>

      <View style={{backgroundColor:'#111',padding:12,borderRadius:8,marginBottom:12}}>
        <Text style={{color:'#fff'}}>AFR</Text>
        <Text style={{color:'#fff',fontSize:20,fontWeight:'700'}}>{afrData[afrData.length-1]}</Text>
      </View>

      <Text style={{marginTop:6, marginBottom:6}}>RPM (real-time)</Text>
      <LineChart
        data={{
          labels: ["", "", "", "", ""],
          datasets: [{ data: rpmData }]
        }}
        width={screenW}
        height={220}
        yAxisSuffix=""
        chartConfig={{
          backgroundGradientFrom: "#1f2937",
          backgroundGradientTo: "#111827",
          color: (opacity=1)=>`rgba(34,197,94,${opacity})`,
          labelColor: (opacity=1)=>`rgba(255,255,255,${opacity})`
        }}
        bezier
        style={{ borderRadius:12 }}
      />

      <Text style={{marginTop:12, marginBottom:6}}>AFR (real-time)</Text>
      <LineChart
        data={{
          labels: ["", "", "", "", ""],
          datasets: [{ data: afrData }]
        }}
        width={screenW}
        height={220}
        yAxisSuffix=""
        chartConfig={{
          backgroundGradientFrom: "#1f2937",
          backgroundGradientTo: "#111827",
          color: (opacity=1)=>`rgba(59,130,246,${opacity})`,
          labelColor: (opacity=1)=>`rgba(255,255,255,${opacity})`
        }}
        bezier
        style={{ borderRadius:12, marginBottom:24 }}
      />

      <TouchableOpacity onPress={()=>navigation.navigate('Tune')} style={{padding:14,backgroundColor:'#0ea5a4',borderRadius:8,marginBottom:12}}>
        <Text style={{color:'#fff',textAlign:'center'}}>Open Tuner</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('Scan')} style={{padding:14,backgroundColor:'#f97316',borderRadius:8,marginBottom:12}}>
        <Text style={{color:'#fff',textAlign:'center'}}>Scan ECU</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('Settings')} style={{padding:14,backgroundColor:'#6d28d9',borderRadius:8}}>
        <Text style={{color:'#fff',textAlign:'center'}}>Settings</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

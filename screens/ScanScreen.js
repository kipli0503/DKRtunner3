import React, {useState} from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { ecuDatabase } from "../libs/ecu_core";

export default function ScanScreen() {
  const [found, setFound] = useState([]);
  function scan(){
    const keys = Object.keys(ecuDatabase);
    setFound(keys);
  }
  return (
    <ScrollView contentContainerStyle={{padding:16}}>
      <Text style={{fontSize:20,fontWeight:'700'}}>Scan ECU (Simulated)</Text>
      <TouchableOpacity onPress={scan} style={{padding:12,backgroundColor:'#0891b2',borderRadius:8,marginTop:12}}>
        <Text style={{color:'#fff',textAlign:'center'}}>Start Scan</Text>
      </TouchableOpacity>
      {found.map((f,i)=>(
        <View key={i} style={{padding:12,marginTop:8,backgroundColor:'#111827',borderRadius:8}}>
          <Text style={{color:'#fff'}}>{f}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

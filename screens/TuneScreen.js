import React, {useState} from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { generateTable, tuneFuel, tuneIgnition } from "../libs/ecu_core";

export default function TuneScreen({ navigation }) {
  const [fuel, setFuel] = useState(generateTable(16,100));
  const [ign, setIgn] = useState(generateTable(16,5));

  return (
    <ScrollView contentContainerStyle={{padding:16}}>
      <Text style={{fontSize:20,fontWeight:'700',marginBottom:12}}>Tuner — Fuel & Ignition</Text>

      <TouchableOpacity onPress={()=>setFuel(tuneFuel(fuel,10))} style={{padding:12,backgroundColor:'#10b981',borderRadius:8,marginBottom:8}}>
        <Text style={{color:'#fff',textAlign:'center'}}>Fuel +10%</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>setIgn(tuneIgnition(ign,1))} style={{padding:12,backgroundColor:'#3b82f6',borderRadius:8,marginBottom:8}}>
        <Text style={{color:'#fff',textAlign:'center'}}>Ignition +1°</Text>
      </TouchableOpacity>

      <Text style={{marginTop:8}}>Fuel Table: {fuel.join(', ')}</Text>
      <Text style={{marginTop:8}}>Ignition Table: {ign.join(', ')}</Text>

      <TouchableOpacity onPress={()=>navigation.goBack()} style={{padding:12,backgroundColor:'#374151',borderRadius:8,marginTop:20}}>
        <Text style={{color:'#fff',textAlign:'center'}}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

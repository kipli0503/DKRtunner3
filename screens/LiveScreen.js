import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function LiveScreen({ navigation }) {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:16}}>
      <Text style={{fontSize:22,fontWeight:'700'}}>Live Data Stream (Sim)</Text>
      <Text style={{marginTop:12}}>RPM / TPS / AFR / Speed streaming here.</Text>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{padding:12,backgroundColor:'#374151',borderRadius:8,marginTop:20}}>
        <Text style={{color:'#fff'}}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

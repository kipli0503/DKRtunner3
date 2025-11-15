import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function LiveDataScreen() {
  const [rpm, setRpm] = useState(1200);
  const [tps, setTps] = useState(1);

  const update = () => {
    setRpm(rpm + Math.floor(Math.random() * 300));
    setTps((Math.random() * 100).toFixed(1));
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 26 }}>LIVE DATA ECU</Text>

      <Text style={{ fontSize: 20, marginTop: 20 }}>RPM: {rpm}</Text>
      <Text style={{ fontSize: 20, marginTop: 20 }}>TPS: {tps}%</Text>

      <TouchableOpacity onPress={update}
        style={{ padding: 20, backgroundColor: "orange", marginTop: 30 }}>
        <Text style={{ color: "white" }}>Update Live Data</Text>
      </TouchableOpacity>
    </View>
  );
}

import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ecuDatabase } from "../libs/ecu_core";

export default function ScanECUScreen() {
  const [detected, setDetected] = useState(null);

  const scan = () => {
    const keys = Object.keys(ecuDatabase);
    const randomECU = keys[Math.floor(Math.random() * keys.length)];
    setDetected(randomECU);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}>Scan ECU</Text>

      <TouchableOpacity onPress={scan}
        style={{ padding: 20, backgroundColor: "green", marginTop: 20 }}>
        <Text style={{ color: "white" }}>Mulai Scan</Text>
      </TouchableOpacity>

      {detected && (
        <Text style={{ fontSize: 22, marginTop: 30 }}>
          ECU Terdeteksi: {detected}
        </Text>
      )}
    </View>
  );
}

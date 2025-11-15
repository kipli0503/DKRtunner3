import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { generateTable, tuneFuel, tuneIgnition } from "../libs/ecu_core";

export default function TuneECUScreen() {
  const [fuel, setFuel] = useState(generateTable(20, 100));
  const [ign, setIgn] = useState(generateTable(20, 10));

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>ECU Tuning PRO</Text>

      <TouchableOpacity
        onPress={() => setFuel(tuneFuel(fuel, 10))}
        style={{
          padding: 15,
          backgroundColor: "#4CAF50",
          marginTop: 20,
          borderRadius: 10
        }}>
        <Text style={{ color: "white" }}>Tambah Fuel +10%</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setIgn(tuneIgn(ign, 2))}
        style={{
          padding: 15,
          backgroundColor: "#2196F3",
          marginTop: 20,
          borderRadius: 10
        }}>
        <Text style={{ color: "white" }}>Tambah Ignition +2°</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 20 }}>Fuel Table: {fuel.join(", ")}</Text>
      <Text style={{ marginTop: 20 }}>Ignition Table: {ign.join(", ")}</Text>
    </View>
  );
}

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>ECU PRO TUNNER</Text>

      <TouchableOpacity onPress={() => navigation.navigate("ScanECU")}
        style={{ padding: 20, backgroundColor: "#4CAF50", marginTop: 20 }}>
        <Text style={{ color: "white" }}>Scan ECU</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("TuneECU")}
        style={{ padding: 20, backgroundColor: "#2196F3", marginTop: 20 }}>
        <Text style={{ color: "white" }}>Tune ECU</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("LiveData")}
        style={{ padding: 20, backgroundColor: "#FF9800", marginTop: 20 }}>
        <Text style={{ color: "white" }}>Live Data</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Settings")}
        style={{ padding: 20, backgroundColor: "#9C27B0", marginTop: 20 }}>
        <Text style={{ color: "white" }}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

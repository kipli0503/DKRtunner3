import React from "react";
import { View, Text } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Settings</Text>
      <Text style={{ marginTop: 20 }}>
        Bahasa, tema, dan konfigurasi lainnya akan disimpan di sini.
      </Text>
    </View>
  );
}

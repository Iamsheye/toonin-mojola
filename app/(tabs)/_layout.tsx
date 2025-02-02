import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import TabBar from "@/components/TabBar";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const user = "mo";

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "haven",
        }}
      />
      <Tabs.Screen
        name="deck"
        options={{
          title: "deck",
        }}
      />
      <Tabs.Screen
        name="earworm"
        options={{
          title: "earworm",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: `@${user || "username"}`,
        }}
      />
    </Tabs>
  );
}

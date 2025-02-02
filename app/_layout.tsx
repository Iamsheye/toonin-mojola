import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { View } from "react-native";
import Constants from "expo-constants";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as NavigationBar from "expo-navigation-bar";

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

NavigationBar.setBackgroundColorAsync("#FCFFF8");
NavigationBar.setButtonStyleAsync("dark");

export default function RootLayout() {
  const colorScheme = useColorScheme();
  // const [loaded] = useFonts({
  //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  // });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  return (
    <ThemeProvider
      value={
        colorScheme === "dark"
          ? {
              ...DefaultTheme,
              colors: { ...DarkTheme.colors, background: "#F4F7F5" },
            }
          : {
              ...DefaultTheme,
              colors: { ...DefaultTheme.colors, background: "#F4F7F5" },
            }
      }>
      <View
        style={{
          paddingTop: Constants.statusBarHeight,
          backgroundColor: "#F4F7F5",
        }}>
        <StatusBar style="dark" translucent />
      </View>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

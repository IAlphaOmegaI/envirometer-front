// React Peer Dependencies
import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
// Android Peer Dependencies
import { SafeAreaView } from "react-native-safe-area-context";
// Expo
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";

// React Native Paper
import {
  DefaultTheme,
  MD3DarkTheme as DarkTheme,
  PaperProvider,
} from "react-native-paper";
// Color Schemes
import darkTheme from "../dark.json";
import lightTheme from "../light.json";
// Icons
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Button } from "../constants/components";
// Necessitates
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = async () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";

      return newTheme;
    });
  };
  const themeObject =
    theme === "dark"
      ? { ...DarkTheme, ...darkTheme }
      : { ...DefaultTheme, ...lightTheme };

  return (
    <PaperProvider theme={themeObject}>
      <SafeAreaView style={{ flex: 1 }}>
        <Button onPress={toggleTheme}>Toggle Theme</Button>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaView>
    </PaperProvider>
  );
}

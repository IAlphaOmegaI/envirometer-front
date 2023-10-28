// React Peer Dependencies
import { ComponentProps, useState } from "react";
import { useColorScheme } from "react-native";
// React Native Paper
import { BottomNavigation, Text } from "react-native-paper";
// Views
import Index from "./index";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "home",
      title: "Home",
      unfocusedIcon: "home-outline",
      focusedIcon: "home",
    },
    {
      key: "achievements",
      title: "Achievements",
      unfocusedIcon: "trophy-outline",
      focusedIcon: "trophy",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    achievements: AchievementsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

const HomeRoute = () => <Index />;
const AchievementsRoute = () => <Text>Achievements</Text>;

// React Peer Dependencies
import { useMemo, useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
// React Native Paper
import { FAB, Searchbar, useTheme } from "react-native-paper";
//  Custom Components
import { Text } from "../../components/Themed";
import {
  CreateActivity,
  Tabs,
  ViewActivities,
} from "../../constants/components";
// Hooks
// Types And Interfaces
import Drawer, { DrawerHandle } from "../../components/general/Drawer/Drawer";

const data = [
  {
    activityTitle: "Driving home!",
    activityDescription:
      "The usual drive home from work, this is peak flux in traffic so its gonna take a while as it, again, usually does",
    emission: 200,
  },
  {
    activityTitle: "Grocery Shopping",
    activityDescription:
      "A quick trip to the local supermarket to stock up on essentials. Given the distance and the traffic, this trip usually has a moderate carbon footprint.",
    emission: 50,
  },
  {
    activityTitle: "Weekend Getaway",
    activityDescription:
      "A short drive to the countryside for a relaxing weekend getaway. The long drive and the use of heating/cooling in the accommodation can lead to a higher carbon footprint.",
    emission: 300,
  },
];

export default function Index() {
  // Theme
  const theme = useTheme();
  // ref
  const drawerRef = useRef<DrawerHandle>(null);
  // * > imperative function
  const handleDrawerOpening = () => {
    if (drawerRef.current) drawerRef.current.openDrawer();
  };
  // Search Value
  const [searchQuery, setSearchQuery] = useState("");
  // consciousness
  // Styles
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          padding: 20,
          gap: 10,
          backgroundColor: theme.colors.background,
        },
        title: {
          fontSize: 20,
          fontWeight: "bold",
        },
        separator: {
          marginVertical: 30,
          height: 1,
          width: "80%",
        },
        tabContainer: {
          width: "100%",
          height: "100%",
        },
        action: {
          position: "absolute",
          bottom: 10,
          right: 10,
        },
        parent: {
          flex: 1,
        },
        children: {
          marginVertical: 5,
        },
      }),
    [theme]
  );
  return (
    <View style={styles.parent}>
      <ScrollView style={styles.container}>
        <Searchbar
          value={searchQuery}
          placeholder="Search"
          onChangeText={setSearchQuery}
          style={styles.children}
        />
        <Tabs
          style={styles.children}
          tabs={[
            {
              summary: "Today",
              icon: "plus",
              content: <ViewActivities data={data} />,
            },
            {
              summary: "Overview",
              icon: "calendar",
              content: <Text>Hi</Text>,
            },
          ]}
        />

        <Drawer
          ref={drawerRef}
          drawerTitle={"Add Activity"}
          drawerContent={<CreateActivity />}
        />
      </ScrollView>
      <FAB onPress={handleDrawerOpening} style={styles.action} icon={"plus"} />
    </View>
  );
}

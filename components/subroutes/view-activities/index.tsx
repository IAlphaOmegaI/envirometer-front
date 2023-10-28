// React Peer Dependencies
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
// React Native Paper
import { Surface, useTheme } from "react-native-paper";
// Custom Components
import { Activity, ActivityProps } from "../../../constants/components";
//Types And Interfaces
type ViewActivitiesProps = {
  data: ActivityProps[];
};

function ViewActivities({ data }: ViewActivitiesProps) {
  // Theme
  const theme = useTheme();
  // Styles
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          height: "100%",
          borderRadius: 18,
        },
      }),
    [theme]
  );
  return (
    <Surface style={styles.container}>
      {data.map((activityData, i) => (
        <Activity {...activityData} key={i} />
      ))}
    </Surface>
  );
}

export default ViewActivities;
export type { ViewActivitiesProps };

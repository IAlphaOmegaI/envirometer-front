// React Peer Dependencies
import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
// React Native Paper
import { Card, IconButton, useTheme } from "react-native-paper";
// Custom Components
import { Header, Accordion, Separator } from "../../../constants/components";
// Types And Interfaces
interface ActivityProps {
  activityTitle: string;
  activityDescription: string;
  emission: number;
}
const Activity = ({
  activityTitle,
  activityDescription,
  emission,
}: ActivityProps) => {
  // Theme
  const theme = useTheme();
  // Styles
  const styles = useMemo(
    () =>
      StyleSheet.create({
        chip: {
          display: "flex",
          alignItems: "center",
        },
        chipsContainer: {
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          gap: 4,
        },
        eventCard: {
          margin: 5,
          backgroundColor: theme.colors.background,
        },
        header: {
          fontSize: theme.fonts.bodyLarge.fontSize,
        },
      }),
    [theme]
  );

  return (
    <Card style={styles.eventCard}>
      <Card.Title
        titleVariant={"headlineSmall"}
        title={activityTitle}
        right={(props) => (
          <IconButton {...props} icon={"car-brake-fluid-level"} />
        )}
      />

      <Card.Content>
        <Header>This event has emitted: </Header>
        <Separator orientation={"horizontal"} />
        <Header variant={"headlineSmall"}>{emission} grams</Header>
        <Accordion summary={"Description"}>
          <Header variant={"bodyMedium"}>{activityDescription}</Header>
        </Accordion>
      </Card.Content>
    </Card>
  );
};

export default Activity;
export type { ActivityProps };

// React Peer Dependencies
import React, { useMemo } from "react";
import { View, StyleSheet } from "react-native";
// React Native Paper
import { useTheme } from "react-native-paper";
// Types And Interfaces
type SeparatorProps = {
  orientation: "horizontal" | "vertical";
};
function Separator({ orientation }: SeparatorProps) {
  // Theme
  const theme = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        separator: {
          width: orientation === "horizontal" ? "100%" : 1,
          height: orientation === "vertical" ? "100%" : 1,
          backgroundColor: theme.colors.inverseSurface,
        },
      }),
    [theme, orientation]
  );
  return <View style={styles.separator}></View>;
}

export default Separator;
export type { SeparatorProps };

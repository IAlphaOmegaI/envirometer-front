// React Peer Dependencies
import React, { ReactNode, useMemo, useState } from "react";
import { StyleSheet, View, ViewStyle, StyleProp } from "react-native";
// React Native Paper
import { useTheme } from "react-native-paper";
// Custom Components
import { Button } from "../../../constants/components";

// Types And Interfaces
interface TabProps {
  summary: string | ReactNode;
  icon: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
  style?: StyleProp<ViewStyle>;
}

const Tabs = ({ tabs, style: suppliedStyles }: TabsProps) => {
  // Theme
  const theme = useTheme();
  // Styles
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
          borderRadius: 20,
          backgroundColor: theme.colors.outline,
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: theme.colors.outline,
          overflow: "hidden",
        },
        button: {
          flex: 1,
          borderRadius: 0,
          backgroundColor: theme.colors.background,
        },
        activeButton: {
          flex: 1,
          borderRadius: 0,
          backgroundColor: theme.colors.primaryContainer,
        },
      }),
    [theme]
  );
  const [activeTab, setActiveTab] = useState<number>(0);
  const handleClick = (i: number) => {
    setActiveTab(i);
  };
  const { summary: activeSummary, content: activeContent } = tabs[activeTab];
  return (
    <>
      <View style={[styles.container, suppliedStyles]}>
        {tabs.map(({ summary, icon }, i) => (
          <Button
            key={`tab-summary-${i}`}
            style={activeTab === i ? styles.activeButton : styles.button}
            icon={icon}
            onPress={() => handleClick(i)}
          >
            {summary}
          </Button>
        ))}
      </View>
      <View>
        <View key={`tab-content-${activeSummary}-${activeTab}`}>
          {activeContent}
        </View>
      </View>
    </>
  );
};

export default Tabs;
export type { TabsProps, TabProps };

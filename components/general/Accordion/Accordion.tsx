// React Peer Dependencies
import React, { ReactNode, useMemo, useState } from "react";
import { View } from "react-native";
// React Native Paper
import { List, ListAccordionProps, useTheme } from "react-native-paper";
// Types And Interfaces
type AccordionProps = {
  children: ReactNode | string[];
  summary: string;
} & Partial<ListAccordionProps>;

function Accordion({ summary, children, ...rest }: AccordionProps) {
  // Theme
  const theme = useTheme();
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded((currentExpanded) => !currentExpanded);
  // Styles
  const styles = useMemo(
    () => ({
      accordion: {
        borderRadius: 20,
      },
      summary: {
        borderRadius: 20,
      },
      content: {
        backgroundColor: theme.colors.inverseOnSurface,
        padding: 10,
        borderRadius: 20,
      },
    }),
    [theme]
  );
  return (
    <List.AccordionGroup>
      <List.Accordion
        {...rest}
        id={summary}
        title={summary}
        expanded={expanded}
        onPress={handlePress}
        style={styles.summary}
      >
        <View style={styles.content}>
          {Array.isArray(children)
            ? children.map((content, i) => (
                <List.Item title={content} key={i} />
              ))
            : children}
        </View>
      </List.Accordion>
    </List.AccordionGroup>
  );
}

export default Accordion;
export type { AccordionProps };

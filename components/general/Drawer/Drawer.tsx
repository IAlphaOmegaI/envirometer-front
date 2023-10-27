import React, {
    useRef,
    useMemo,
    forwardRef,
    useImperativeHandle,
    useState, ReactNode,
} from "react";
import {
  Animated,
  StyleSheet,
  PanResponder,
  Dimensions,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  // TouchableWithoutFeedback,
} from "react-native";
import { Portal, useTheme, Divider, IconButton } from "react-native-paper";
import Header from "../Header/Header";

interface Props {
  drawerContent: React.ReactNode;
  instantBackdrop?: boolean;
  drawerTitle: string;
}
export interface DrawerHandle {
  openDrawer: () => void;
  closeDrawer: () => void;
}
interface DrawerContent {
    title: string;
    content: ReactNode;
}

const Drawer = forwardRef<DrawerHandle, Props>(
  ({ drawerContent, instantBackdrop, drawerTitle }, ref) => {
    const [backdropVisibility, setBackdropVisibility] = useState(false);
    // * the gesture handler
    const panResponder = useRef(
      PanResponder.create({
        onMoveShouldSetPanResponder: (e, gestureState) => {
          // ? Returns true if the user is swiping down
          return gestureState.dy > 0;
        },
        onPanResponderRelease: (e, gestureState) => {
          //?  Closing the drawer if the user swipes down
          if (gestureState.dy > 0) {
            closeDrawer();
          }
        },
      })
    ).current;

    // * theme
    const theme = useTheme();
    // * dynamic height
    const fullHeight = Dimensions.get("screen").height;
    const drawerHeight = 0.8 * fullHeight;
    // * animated values
    const animatedValue = useRef(new Animated.Value(fullHeight)).current;
    const backdropOpacity = useRef(new Animated.Value(0)).current;
    //
    const styles = useMemo(
      () =>
        StyleSheet.create({
          container: {
            width: "100%",
            height: "100%",
            backgroundColor: theme.colors.backdrop,
          },
          drawer: {
            backgroundColor: theme.colors.surface,
            borderTopLeftRadius: theme.roundness + 15,
            borderTopRightRadius: theme.roundness + 15,
            padding: 15,
            display: "flex",
            width: "100%",
            position: "absolute",
          },
          subContainer: {
            display: "flex",
            gap: 5,
            flexDirection: "column",
          },
          iconContainer: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 20,
          },
          animatedView: {
            ...StyleSheet.absoluteFillObject,
            height: fullHeight,
            width: Dimensions.get("screen").width,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          },
          keyboardView: {
            flex: 1,
            height: drawerHeight,
            position: "absolute",
            bottom: 0,
            width: "100%",
          },
        }),
      [theme]
    );

    const openDrawer = () => {
      setBackdropVisibility(true);
      Animated.parallel([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: theme.animation.defaultAnimationDuration,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 1,
          duration: instantBackdrop
            ? 0
            : theme.animation.defaultAnimationDuration,
          useNativeDriver: true,
        }),
      ]).start();
    };
    useImperativeHandle(ref, () => ({
      openDrawer,
      closeDrawer,
    }));

    const closeDrawer = () => {
      Animated.parallel([
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: theme.animation.defaultAnimationDuration,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 0,
          duration: theme.animation.defaultAnimationDuration,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setBackdropVisibility(false);
      });
    };

    // animations
    const translateY = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [fullHeight, 0],
    });

    return (
      <Portal>
        {backdropVisibility && (
          <Animated.View
            style={[styles.container, { opacity: backdropOpacity }]}
          ></Animated.View>
        )}

        <Animated.View
          style={[styles.animatedView, { transform: [{ translateY }] }]}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={-drawerHeight}
            style={styles.keyboardView}
          >
            <View style={[styles.drawer, { height: drawerHeight }]}>
              <View {...panResponder.panHandlers} style={styles.subContainer}>
                <View style={styles.iconContainer}>
                  <IconButton icon={"chevron-up"} disabled />
                </View>
                <Header variant="displayMedium">{drawerTitle}</Header>
                <Divider />
              </View>
              <ScrollView>{drawerContent}</ScrollView>
            </View>
          </KeyboardAvoidingView>
        </Animated.View>
      </Portal>
    );
  }
);
Drawer.displayName = "Drawer";
export default Drawer;
export type {DrawerContent}
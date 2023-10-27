import { StyleSheet } from "react-native";
import React from "react";
import { Button as PaperButton, ButtonProps } from "react-native-paper";

interface Props extends ButtonProps {
  onPress?: () => void;
}

const Button = ({ onPress, children, ...rest }: Props) => {
  return (
    <PaperButton
      style={(styles.button, rest.style)}
      {...rest}
      onPress={() => (onPress ? onPress() : null)}
    >
      {children}
    </PaperButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 4,
  },
});

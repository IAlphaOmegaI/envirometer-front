import { StyleSheet } from "react-native";
import React from "react";
import { TextInput, TextInputProps } from "react-native-paper";

interface Props extends TextInputProps {
  icon?: string;
  iconClickHandler?: () => void;
}

const Input = ({ icon, iconClickHandler, ...rest }: Props) => {
  return (
    <>
      <TextInput
          mode={'outlined'}
        style={styles.input}
        {...rest}
        right={
          icon && <TextInput.Icon icon={icon} onPress={iconClickHandler} />
        }
      />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: "100%",
  },
});

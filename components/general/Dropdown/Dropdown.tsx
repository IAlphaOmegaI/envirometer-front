import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Input from "../Input/Input";
import { Menu } from "react-native-paper";
interface ListProps {
  _id: string;
  value: string;
  icon?: string;
}
interface Props {
  label: string;
  arrayList: ListProps[];
  onSelection: (value: any) => void;
}

const Dropdown = ({ label, onSelection, arrayList, ...rest }: Props) => {
  const [open, setOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState(label);
  const closeMenu = () => setOpen(false);

  return (
    <View {...rest} style={styles.container}>
      <Menu
        visible={open}
        onDismiss={closeMenu}
        style={styles.menu}
        anchor={
          <TouchableOpacity onPress={() => setOpen((prevState) => !prevState)}>
            <Input
              mode="outlined"
              placeholder={placeholder}
              icon="chevron-down"
              iconClickHandler={() => setOpen((prevState) => !prevState)}
              disabled
            />
          </TouchableOpacity>
        }
      >
        {arrayList.map(({ _id, value, icon }, i) => (
          <Menu.Item
            title={value}
            testID={_id}
            key={i}
            onPress={() => {
              closeMenu();
              onSelection({ _id, value, icon });
              setPlaceholder(value);
            }}
            leadingIcon={icon ?? ""}
          />
        ))}
      </Menu>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  menu: {
    marginTop: 60,
    width: "90%",
  },
});

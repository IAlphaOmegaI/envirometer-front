import React from "react";
import { TextProps, customText } from "react-native-paper";
import { VariantProp } from "react-native-paper/lib/typescript/components/Typography/types";

interface Props extends TextProps<string> {
  subtext?: string;
  subtextStyles?: VariantProp<"bold" | "italic" | "boldItalic">;
}
const PaperText = customText<"bold" | "italic" | "boldItalic">();

const Header = ({ children, subtext, subtextStyles, ...rest }: Props) => {
  return (
    <>
      <PaperText {...rest}>{children}</PaperText>
      {subtext && <PaperText variant={subtextStyles}>{subtext}</PaperText>}
    </>
  );
};

export default Header;

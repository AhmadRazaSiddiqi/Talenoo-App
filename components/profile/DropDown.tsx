// components/ReusableDropdown.tsx
import React from "react";
import { TextInput } from "react-native-paper";
import { Dropdown } from "react-native-paper-dropdown";
// ✅ Default import

interface OptionType {
  label: string;
  value: string;
}

interface ReusableDropdownProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  list: OptionType[];
  placeholder?: string;
  mode?: "outlined" | "flat";
}

const DropdownComponent: React.FC<ReusableDropdownProps> = ({
  label,
  value,
  setValue,
  list,
  placeholder = "Select an option",
  mode = "outlined",
}) => {
  return (
    <Dropdown
      label={label}
      mode={mode}
      value={value}
      setValue={setValue}
      list={list}
      inputProps={{
        right: <TextInput.Icon icon="menu-down" />,
        placeholder: placeholder,
      }}
    />
  );
};

export default DropdownComponent;

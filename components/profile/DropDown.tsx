import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
interface OptionType {
  label: string;
  value: string;
}

interface ReusableDropdownProps {
  label: string;
  value: string;
  
  placeholder?: string;
  items?:[]

}

const DropdownComponent: React.FC<ReusableDropdownProps> = ({
  value,
  items, // Default empty array
  placeholder = "Select an option",
  setValue,
  setItems
}) => {

  const[showDropdown,setShowDropdown]=useState<boolean>(false)
  return (
    <DropDownPicker
     open={showDropdown}
     value={value}
     items={items}
     setOpen={setShowDropdown}
     setValue={setValue}
     setItems={setItems}
     placeholder={placeholder}
     listMode="SCROLLVIEW"
    />
   
  );
};

export default DropdownComponent;
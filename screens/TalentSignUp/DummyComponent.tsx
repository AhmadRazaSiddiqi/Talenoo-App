import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
export const CitySelector = () => {
    const [gender, setGender] = useState<string>();
  const [value,setValue]=useState<string>('')
  const[showDropdown,setShowDropdown]=useState<boolean>(false)
  const [items, setItems] = useState([
    {label: 'Spain', value: 'spain'},
    {label: 'Madrid', value: 'madrid', parent: 'spain'},
    {label: 'Barcelona', value: 'barcelona', parent: 'spain'},

    {label: 'Italy', value: 'italy'},
    {label: 'Rome', value: 'rome', parent: 'italy'},

    {label: 'Finland', value: 'finland'}
  ]);
  // Properly typed dummy data
  const OPTIONS = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];

  return (
    <DropDownPicker
    open={showDropdown}
    value={value}
    items={OPTIONS}
    setOpen={setShowDropdown}
    setValue={setValue}
    setItems={setItems}
    
  />
  );
};
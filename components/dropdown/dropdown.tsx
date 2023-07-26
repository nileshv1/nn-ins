import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  FormHelperText
} from "@mui/material";
import React, { useState } from "react";

interface DropdownProps {
  // Define your expected properties here
  options: Array<{ value: string; label: string }>;
  label: string;
  // ...
}
const Dropdown: React.FC<DropdownProps> = (props) => {
  const { options, label, ...rest } = props;
  const [dropdownValue, setDropdownValue] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setDropdownValue(event.target.value);
  };
  console.log(dropdownValue);

  return (
    <FormControl size="small" fullWidth error={!dropdownValue}>
      {/* <InputLabel id="demo-simple-select-label">{label}</InputLabel> */}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        input={<OutlinedInput />}
        renderValue={(selected) => {
          console.log(selected, "selected");
          if (selected.length === 0) {
            return <em>Placeholder</em>;
          }
          return selected;
        }}
        sx={{
          height: 32,
        }}
        value={dropdownValue}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem disabled value="">
          <em>Select</em>
        </MenuItem>
        {options.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
      {!dropdownValue ? <FormHelperText>Required</FormHelperText> :<></>}
    </FormControl>
  );
};

export default Dropdown;

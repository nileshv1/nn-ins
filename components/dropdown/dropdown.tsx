import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  FormHelperText,
  InputLabel
} from "@mui/material";
import React, { useState } from "react";

interface DropdownProps {
  // Define your expected properties here
  options: Array<{ value: string; label: string }>;
  label: string;
  register:any;
  required:any;
  errors:any;
  // ...
}
const Dropdown: React.FC<DropdownProps> = (props) => {
  const { options, label, register, required, errors, ...rest } = props;
  // console.log(props)
  // const [dropdownValue, setDropdownValue] = useState("");
  // const handleChange = (event: SelectChangeEvent) => {
  //   setDropdownValue(event.target.value);
  // };
  // console.log(dropdownValue);

  return (
    <FormControl size="small" fullWidth >
      {/* <InputLabel id="demo-simple-select-label">{label}</InputLabel> */}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        input={<OutlinedInput />}
        // label={label}
        {...register(label, {required})}
        renderValue={(selected) => {
          // console.log(selected, "selected");
          if (selected.length === 0) {
            return <em>Placeholder</em>;
          }
          return selected;
        }}
        sx={{
          height: 32,
        }}
        // value={dropdownValue}
        // label="Age"
        // onChange={handleChange}
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
      {errors[label] &&  <FormHelperText error>Required</FormHelperText> }
    </FormControl>
  );
};

export default Dropdown;

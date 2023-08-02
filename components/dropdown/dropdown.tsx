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
import { Formik } from "formik";

interface DropdownProps {
  // Define your expected properties here
  options: Array<{ value: string; label: string }>;
  label: string;
  val: any;
  id:any;
  name:any;
  handleChange:any;
 
}
const Dropdown: React.FC<DropdownProps> = (props) => {
  const { options, label,val,handleChange,id, name,...rest } = props;

  return (
    <FormControl size="small" fullWidth >
      {/* <InputLabel id="demo-simple-select-label">{label}</InputLabel> */}
      <Select
        labelId="demo-simple-select-label"
        input={<OutlinedInput />}
        id={id}
        name={name}
        value={val}
        onChange={handleChange}
        renderValue={(selected) => {
          if (selected.length === 0) {
            // console.log("Hi")
            return <em>Select</em>;
            
          }
          // console.log("Hello")
          return selected;
        }}
        displayEmpty     
        sx={{
          height: 32,
        }}
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
    </FormControl>
  );
};

export default Dropdown;

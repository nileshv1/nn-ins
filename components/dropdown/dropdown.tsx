import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  FormHelperText,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";
// import { Formik } from "formik";
import { useForm, Controller } from "react-hook-form";

interface DropdownProps {
  // Define your expected properties here
  options: Array<{ value: string; label: string }>;
  label: string;
  id: any;
  name: any;
  errors:any;
  control:any;
}
const Dropdown: React.FC<DropdownProps> = (props) => {
  const { options, name, label, id, errors, control, ...rest } = props;
  // console.log(errors)

  return (
    <FormControl size="small" fullWidth>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Select
            {...field}
            labelId="demo-simple-select-label"
            input={<OutlinedInput />}
            error={Boolean(errors[name])}
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
        )}
      />
      {errors[name] && (
        <FormHelperText error>{errors[name].message}</FormHelperText>
      )}
    </FormControl>
  );
};

export default Dropdown;

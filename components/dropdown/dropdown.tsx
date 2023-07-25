import React from 'react'
import { Paper, Box, Typography, FormControl, InputLabel, Select, MenuItem, OutlinedInput } from '@mui/material';
import { useState } from 'react';

function Dropdown(props) {
    const { options, label, ...rest } = props
    const [dropdownValue, setDropdownValue] = useState('')
    const handleChange = (event) => {
        setDropdownValue(event.target.value);
    };
    console.log(dropdownValue)

    return (
        <FormControl size="small" fullWidth>
            {/* <InputLabel id="demo-simple-select-label">{label}</InputLabel> */}
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                input={<OutlinedInput />}
                renderValue={(selected) => {
                    console.log(selected, "selected")
                    if (selected.length === 0) {
                        return <em>Placeholder</em>;
                    }
                    return selected
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
                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}

export default Dropdown
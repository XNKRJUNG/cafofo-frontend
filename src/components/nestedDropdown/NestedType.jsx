import React from "react"
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material"

export const NestedTypeComponent = ({ label, value, options, onChange }) => {
  return (
    <FormControl variant="filled" sx={{ width: 200 }} size="small">
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={onChange} label={label} size="small">
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

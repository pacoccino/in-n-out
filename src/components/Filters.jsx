import React from 'react';

import { TextField, Select, MenuItem } from '@material-ui/core';

export function TextFilter({ value, onChange, placeholder }) {
  return (
    <TextField
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
    />
  )
}
export function SelectFilter({ value, onChange, options }) {
  return (
    <Select
      value={value}
      onChange={e => onChange(e.target.value)}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
    >
      <MenuItem value={undefined}>All</MenuItem>
      {options.map(option => (
        <MenuItem key={option.key} value={option.key}>
          {option.label}
        </MenuItem>
      ))}
    </Select>

  )
}

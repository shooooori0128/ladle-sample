import { useEffect, useState } from 'react'

import { Story } from '@ladle/react'

import TextField, { TextFieldProps } from './TextField'

export const Default: Story<TextFieldProps> = ({ label, ariaLabel, value: defaultValue, disabled = false }: TextFieldProps) => {
  const [value, setValue] = useState('')

  useEffect(() => setValue(defaultValue), [defaultValue])
  
  return (
    <TextField
      label={label}
      ariaLabel={ariaLabel}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled={disabled}
    />
  )
}

// https://ladle.dev/docs/controls
Default.args = {
  label: 'label',
  ariaLabel: '',
  value: '',
  // disabled: false
}

Default.argTypes = {
  disabled: {
    options: [true, false],
    control: { type: 'radio' },
    defaultValue: false,
  }
}

export const Disabled = () => {
  const [value, setValue] = useState('')

  return (
    <TextField label="label" value={value} onChange={(e) => setValue(e.target.value)} disabled></TextField>
  )
}
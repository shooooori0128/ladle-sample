import { ChangeEvent, ReactNode } from "react"

export type TextFieldProps = {
  label: string
  ariaLabel?: string
  value: string
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => unknown
}

const TextField = ({ label, ariaLabel, value, disabled = false, onChange }: TextFieldProps) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    return onChange(e)
  }
  
  return (
    <div>
      <p style={{ fontSize: 12, margin: 0 }}>{label}</p>
      <input type="text" aria-label={ariaLabel} disabled={disabled} value={value} onChange={onChangeHandler}/>
    </div>
  )
}

export default TextField
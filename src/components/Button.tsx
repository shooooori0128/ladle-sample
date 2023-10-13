import { MouseEventHandler, ReactNode } from "react"

export type ButtonProps = {
  children: ReactNode
  disabled?: boolean
  onClick?: () => MouseEventHandler<HTMLButtonElement>
}

const Button = ({ children, disabled = false, onClick }: ButtonProps) => {
  return (
    <button disabled={disabled} style={{ padding: '8px 16px', cursor: 'pointer' }} onClick={onClick}>{children}</button>
  )
}

export default Button
import { Story, action } from '@ladle/react'

import Button, { ButtonProps } from './Button'

export const Default: Story<ButtonProps> = ({ disabled, onClick }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      Click me!
    </Button>
  )
}

Default.args = {
  disabled: false
}

// https://ladle.dev/docs/actions
Default.argTypes = {
  onClick: {
    action: 'Click now!'
  }
}

export const Disabled = () => {
  return (
    <Button disabled onClick={() => action('Click now!')}>
      Click me!
    </Button>
  )
}
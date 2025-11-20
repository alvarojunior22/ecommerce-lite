
type opcionVariant = 'primary' | 'secondary' | 'danger'

type opcionSize = 'sm' | 'md' | 'lg'


export interface propsButton {
  variant?: opcionVariant
  size?: opcionSize
  disabled?: boolean
  loading?: boolean
  leftIcon?: string
  rightIcon?: string
  onClick?: () => void
  text: string
}
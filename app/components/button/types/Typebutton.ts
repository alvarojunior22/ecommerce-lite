import React from "react"

type opcionVariant = 'primary' | 'secondary' | 'danger'

type opcionSize = 'sm' | 'md' | 'lg'


export interface propsButton {
  variant?: opcionVariant
  size?: opcionSize
  disabled?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onClick?: () => void
  text: string
}
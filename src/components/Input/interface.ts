import React from 'react'

export type InputProps = {
  placeholder?: string
  icon?: React.ReactNode
  onChange?: (e: any) => void
  iconClick?: () => void
  value: string
}

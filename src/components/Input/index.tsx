import React from 'react'
import { Container } from './styles'
import { InputProps } from './interface'

const Input = ({
  placeholder,
  icon,
  onChange,
  iconClick,
  value
}: InputProps) => {
  return (
    <Container>
      <input
        className="input"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <div onClick={iconClick} className="icon">
        {icon}
      </div>
    </Container>
  )
}

export default Input

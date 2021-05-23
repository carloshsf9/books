import React from 'react'
import { Container } from './styles'
import { InputProps } from './interface'

const Input = ({ placeholder, icon }: InputProps) => {
  return (
    <Container>
      <input className="input" placeholder={placeholder} />
      <div className="icon">{icon}</div>
    </Container>
  )
}

export default Input

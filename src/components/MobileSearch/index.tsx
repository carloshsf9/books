import React from 'react'
import { Container } from './styles'
import Input from 'components/Input'
const MobileSearch = () => {
  return (
    <Container>
      <div className="input-container">
        <Input
          value=""
          placeholder="Pesquise por títulos, palavras chaves e autores"
        />
      </div>
    </Container>
  )
}

export default MobileSearch

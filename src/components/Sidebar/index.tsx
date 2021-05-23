import React from 'react'
import { Container } from './styles'
import Input from 'components/Input'
import { FaSearch } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <Container>
      <div className="header">
        <Input placeholder="Pesquisar..." icon={<FaSearch />} />
      </div>
    </Container>
  )
}

export default Sidebar

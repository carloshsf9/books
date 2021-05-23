import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Container } from './styles'
import { SidebarProps } from './interface'
import Input from 'components/Input'
import { FaSearch } from 'react-icons/fa'
import {
  AiFillLeftCircle,
  AiFillRightCircle,
  AiOutlineClose
} from 'react-icons/ai'

const Sidebar = ({ books }: SidebarProps) => {
  const router = useRouter()
  const [isActive, setIsActive] = useState(true)
  const [search, setSearch] = useState('')

  return (
    <Container isActive={isActive}>
      <div className="header">
        <h1> Pesquisar </h1>
        <div className="toggle-button" onClick={() => setIsActive(!isActive)}>
          {isActive ? (
            <AiFillLeftCircle size={28} />
          ) : (
            <AiFillRightCircle size={28} />
          )}
        </div>
      </div>
      <div className="search">
        <Input
          value={search}
          onChange={e => setSearch(e.target.value)}
          iconClick={() => setSearch('')}
          placeholder="ítulos, palavras chaves e autores"
          icon={
            search.length ? (
              <AiOutlineClose size={18} />
            ) : (
              <FaSearch size={18} />
            )
          }
        />
      </div>
      <ul className="search-list">
        {books.map((book, index) => (
          <li key={index} onClick={() => router.push(`/${book.isbn}`)}>
            {book.title}
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Sidebar

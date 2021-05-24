import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Container, FilterButton } from './styles'
import { useGlobalContext } from 'contexts/globalContext'
import Input from 'components/Input'
import { FaSearch } from 'react-icons/fa'
import {
  AiFillLeftCircle,
  AiFillRightCircle,
  AiOutlineClose
} from 'react-icons/ai'

import { getBooksByKeywords } from 'utils/getBooksByKeywords'
import { formatBookResponse } from 'utils/formatBookResponse'

const Sidebar = () => {
  const router = useRouter()
  const {
    showFavorites,
    setShowFavorites,
    setBooks,
    books
  } = useGlobalContext()
  const [isActive, setIsActive] = useState(true)
  const [search, setSearch] = useState('')

  const handleBooksSearch = async (keywords: string) => {
    setSearch(keywords)
    setBooks && setBooks([])
    if (keywords.length > 0) {
      const response = await getBooksByKeywords(keywords)
      const formatedBooks = response.map((book: any) => {
        return formatBookResponse(book)
      })

      setBooks && setBooks(formatedBooks)
    }
  }

  const clearSearch = () => {
    setSearch('')
    setBooks && setBooks([])
  }

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
      <div className="filter">
        <span>Filtros:</span>
        <FilterButton
          isActive={showFavorites}
          onClick={() => setShowFavorites && setShowFavorites(!showFavorites)}
        >
          Favoritos
          {showFavorites && <AiOutlineClose />}
        </FilterButton>
      </div>
      <div className="search">
        <Input
          value={search}
          onChange={e => handleBooksSearch(e.target.value)}
          iconClick={() => clearSearch()}
          placeholder="Títulos, palavras chaves e autores"
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
        {books?.map((book, index) => (
          <li key={index} onClick={() => router.push(`/${book.id}`)}>
            {book.title}
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Sidebar

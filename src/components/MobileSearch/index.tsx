import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import Input from 'components/Input'
import { MobileSearchProps } from './interface'
import { useGlobalContext } from 'contexts/globalContext'
import { FaFilter } from 'react-icons/fa'
import { getBooksByKeywords } from 'utils/getBooksByKeywords'
import { formatBookResponse } from 'utils/formatBookResponse'
import { AiOutlineClose } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'

import { useRouter } from 'next/router'

const MobileSearch = ({
  page,
  search,
  setSearch,
  setPage
}: MobileSearchProps) => {
  const router = useRouter()
  const {
    books,
    setBooks,
    showFavorites,
    setShowFavorites
  } = useGlobalContext()

  const handleBooksSearch = async (keywords: string) => {
    setSearch(keywords)
    setBooks && setBooks([])
    if (keywords.length > 0) {
      const { books } = await getBooksByKeywords(keywords, page)
      const formatedBooks = books?.map((book: any) => {
        return formatBookResponse(book)
      })

      setBooks && setBooks(formatedBooks)
    }
  }

  const clearSearch = () => {
    setSearch('')
    setPage && setPage(0)
    setBooks && setBooks([])
  }

  useEffect(() => {
    handleBooksSearch(search)
  }, [page])

  return (
    <Container>
      <div className="input-container">
        <div className="input">
          <Input
            value={search}
            placeholder="Pesquise por títulos, palavras-chave e autores"
            onChange={e => handleBooksSearch(e.target.value)}
            iconClick={() => clearSearch()}
            icon={
              search?.length ? (
                <AiOutlineClose size={18} />
              ) : (
                <FaSearch size={18} />
              )
            }
          />
        </div>
        <span
          className="filter-button"
          onClick={() => setShowFavorites && setShowFavorites(!showFavorites)}
        >
          <FaFilter size={18} color={showFavorites ? '#FCA311' : 'white'} />
        </span>
      </div>
      <div className="results-container">
        <ul>
          {search.length > 0 &&
            books?.slice(0, 4).map((book, index) => (
              <li
                className="result"
                onClick={() => router.push(`/${book.id}`)}
                key={index}
              >
                {book.title}
              </li>
            ))}
        </ul>
      </div>
    </Container>
  )
}

export default MobileSearch
